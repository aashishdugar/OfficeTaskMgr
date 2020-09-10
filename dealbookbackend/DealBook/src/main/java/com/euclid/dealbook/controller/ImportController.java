package com.euclid.dealbook.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.service.ImportService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping(path = "import")
public class ImportController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ImportController.class);

	@Autowired
	private ImportService importService;

	@PostMapping(path = "contacts")
	public Response importContacts(@RequestBody File file) {
		try {

			List<Contact> contacts = importService.importContacts(file);
			return createResponse(contacts);
		} catch (ApplicationException e) {
			return processException(e);
		}
	}

	/**
	 * Read data.
	 *
	 * @param inStream the in stream
	 * @return the byte[]
	 * @throws GstException the gst exception
	 */
	@SuppressWarnings("unused")
	private static byte[] readData(InputStream inStream) throws ApplicationException {
		try {
			return IOUtils.toByteArray(inStream);

		} catch (Exception e) {
			throw new ApplicationException("fail to Read InputStream");
		}
	}

	@PostMapping("/impcontacts")
	public Response importContacts(@RequestParam("file") MultipartFile file) throws IOException {
		try {
			LOGGER.debug("Service Started:");
			LOGGER.debug("File Name:" + file.getName());

			List<Contact> contactList = importService.importContacts(file);
			LOGGER.debug("Contact List:" + contactList);

			return createResponse(contactList, "Contact Created Successfully");
		} catch (ApplicationException e) {
			e.printStackTrace();
			return processException(e);
		}
	}

	@PostMapping(value = "impactivity")
	public Response impActivity(@RequestParam("file") MultipartFile file) {
		try {
			LOGGER.debug("Activity Importes Started:");
			List<Activity> activityList = importService.importActivities(file);
			return createResponse(activityList, "Activity Imported Successfully");
		} catch (ApplicationException e) {
			return processException(e);
		}
	}

}
