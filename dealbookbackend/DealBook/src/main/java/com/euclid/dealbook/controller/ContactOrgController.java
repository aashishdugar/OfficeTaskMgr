package com.euclid.dealbook.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.ContactOrgService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/contactorg")
public class ContactOrgController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ContactOrgController.class);

	@Autowired
	private ContactOrgService contactOrgService;

	@PostMapping("/getall")
	public Response getall() {
		try {
			LOGGER.debug("Get All ContactOrganization");
			return createResponse(contactOrgService.getall(), "Contact Organization List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/get/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get ContactOrganization");
			ContactOrg contactOrgObject = contactOrgService.get(id);
			return createResponse(contactOrgObject, "Contact Organization Fetched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/create")
	public Response create(@RequestBody ContactOrg contactOrgObject) {
		try {
			LOGGER.debug("Create Contact Organization");
			ContactOrg contactOrg = contactOrgService.create(contactOrgObject);
			return createResponse(contactOrg, "Contact Organization Created Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/delete/{id}")
	public Response delete(@PathVariable int id) {
		try {
			LOGGER.debug("Delete Contact Organization");
			contactOrgService.delete(id);
			return createResponse(null, "Contact Organization Deleted");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/update")
	public Response update(@RequestBody ContactOrg contactOrgObject) {
		try {
			LOGGER.debug("Update Contact Organization");
			ContactOrg contactOrg = contactOrgService.save(contactOrgObject);
			return createResponse(contactOrg, "Contact Organization Updated Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
