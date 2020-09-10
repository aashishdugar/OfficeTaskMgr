package com.euclid.dealbook.controller;

import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.dao.ContactView;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.ContactService;
import com.euclid.dealbook.vo.ContactHierachyVo;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/contact")
public class ContactController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ContactController.class);

	@Autowired
	private ContactService contactService;

	@PostMapping("/create")
	public Response create(@RequestBody Contact contactObject) {
		try {
			LOGGER.debug("Create Contact");
			contactObject = contactService.create(contactObject);
			return createResponse(null, "Contact Created Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getall")
	public Response getall() {
		try {
			LOGGER.debug("Get All Contacts");
			return createResponse(contactService.getall(), "Contact List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/get/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get Contact");
			Contact contactObject = contactService.get(id);
			return createResponse(contactObject, "Contact Get Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/delete/{id}")
	public Response delete(@PathVariable int id) {
		try {
			LOGGER.debug("Delete Contact");
			contactService.delete(id);
			return createResponse(null, "Contact Deleted");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/update")
	public Response update(@RequestBody Contact contactObject) {
		try {
			LOGGER.debug("Update Contact");
			Contact contact = contactService.save(contactObject);
			return createResponse(contact, "Contact Updated Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/createbulkcontacts")
	public Response createBulkContacts(@RequestBody Contact[] contactObject) {
		try {
			LOGGER.debug("Create Bulk Contacts");
			List<Contact> list = Arrays.asList(contactObject);
			List<ContactView> contactList = contactService.createBulkContacts(list);
			return createResponse(contactList, "Contacts Created Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getdesignations")
	public Response findDistinctDesignation() {
		try {
			LOGGER.debug("find Distinct Designation from Contacts");
			return createResponse(contactService.findDistinctDesignation(), "Designation List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getallcontactowner")
	public Response findAllContactOwner() {
		try {
			LOGGER.debug("find All ContactOwner");
			List<ContactDetailsView> contactOwnerList = contactService.findAllContactOwner();
			return createResponse(contactOwnerList, "Contact Owner Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getallreportingto")
	public Response findAllReportingTo() {
		try {
			LOGGER.debug("find All ContactOwner");
			return createResponse(contactService.findAllReportingTo(), "Reporting Contact Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getparenthierachy/{id}")
	public Response getParentHierachy(@PathVariable int id) {
		try {
			LOGGER.debug("Get Contact Organization Hierachy");
			ContactHierachyVo contactHierachyVo = contactService.getParentHierachy(id);
			return createResponse(contactHierachyVo, "Contact Hierachy Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
