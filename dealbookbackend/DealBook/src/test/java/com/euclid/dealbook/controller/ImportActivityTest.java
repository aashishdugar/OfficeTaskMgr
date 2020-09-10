package com.euclid.dealbook.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.dao.ContactView;
import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.vo.Response;
import com.fasterxml.jackson.core.JsonProcessingException;

public class ImportActivityTest extends AbstractTest {

	private static final String USER_DIR_PATH;
	private static final String IMPORT_CONTACTS_PATH;
	private List<String> contactEmails;
	
	@Before
	public void initBeforeEachTest() {
		contactEmails = addDummyData();
	}
	@After
	public void destroyAfterEachTest() {
		deleteAllDummyContactsFromDB(contactEmails);
	}
	@Test
	public void testValidFile() {
		
		try {
			File fileObj = new File(USER_DIR_PATH
					+ IMPORT_CONTACTS_PATH
					+ "ValidActivity.xlsx");
			String content = convertObjectToJson(fileObj);
			Response response = postMethodCall(
					"/import/activity",
					MediaType.APPLICATION_JSON,
					content);
			validateSuccess(response);
			deleteAllImportedActivities((List<?>) response.getData());
		} catch (Exception e) {
			Assert.fail(e.getMessage());
		}
	}
	@Test
	public void testInvalidData() {
		try {
			File fileObj = new File(USER_DIR_PATH
					+ IMPORT_CONTACTS_PATH
					+ "InvalidActivity.xlsx");
			String content = convertObjectToJson(fileObj);
			Response response = postMethodCall(
					"/import/activity",
					MediaType.APPLICATION_JSON,
					content);
			validateFailure(response);
		} catch (Exception e) {
			Assert.fail(e.getMessage());
		}
	}
	private void deleteAllImportedActivities(
			List<?> activityObjectList) {
		
		for (Object activityObj: activityObjectList) {
			
			Activity activity = convertMapToObject(
					(Map<?, ?>) activityObj, Activity.class);
			String uriTemplate = "/activity/delete/";
			deleteDataFromDB(uriTemplate, activity.getId());
		}
	}
	private void deleteDataFromDB(String uriTemplate, Long id) {
		try {
			uriTemplate = uriTemplate + id;
			MediaType mediaType = MediaType.APPLICATION_JSON;
			Response response = postMethodCall(uriTemplate, mediaType);
			validateSuccess(response);
		} catch (Exception e) {
			Assert.fail("Exception while performing delete operation for id: " + id);
		}
	}
	private void deleteAllDummyContactsFromDB(List<String> contactList) {
		try {
			
			String uriTemplate = "/contact/getall";
			String uriTemplateForDelete = "/contact/delete/";
			MediaType mediaType = MediaType.APPLICATION_JSON;
			Response response = postMethodCall(uriTemplate, mediaType);
			List<?> listOfContactView = (List<?>) response.getData();
			for (Object obj: listOfContactView) {
				
				ContactView contactView = convertMapToObject(
						(Map<?, ?>) obj, ContactView.class);
				if (contactList.contains(contactView.getEmail())) {
					deleteDataFromDB(uriTemplateForDelete, contactView.getId());
				}
			}
		} catch (Exception e) {
			Assert.fail("Exception while deleting dummy contacts.");
		}
	}
	private List<String> addDummyData() {
		
		try {
			List<String> contactList = new LinkedList<>();
			Contact abc = createContact("ABC", "abc@gmail.com");
			createContact(abc);
			Contact cde = createContact("CDE", "cde@gmail.com");
			createContact(cde);
			Contact createdBy = createContact("Created By", "createdby@gmail.com");
			createContact(createdBy);
			contactList.add(abc.getEmail());
			contactList.add(cde.getEmail());
			contactList.add(createdBy.getEmail());
			return contactList;
		} catch (Exception e) {
			Assert.fail(e.getMessage());
		}
		return null;
	}

	private Response createContact(Contact contact)
			throws JsonProcessingException, Exception {
		
		String uriTemplate = "/contact/create";
		MediaType mediaType = MediaType.APPLICATION_JSON;
		String content = convertObjectToJson(contact);
		Response response = postMethodCall(uriTemplate, mediaType, content);
		validateSuccess(response);
		return response;
	}
	private void validateSuccess(Response response) {
		if ("FAIL".equals(response.getStatus())) {
			Assert.fail("Failed to insert dummy contact.");
		}
	}
	private void validateFailure(Response response) {
		if ("SUCCESS".equals(response.getStatus())) {
			Assert.fail("Failed to insert dummy contact.");
		}
	}
	private Contact createContact(String name, String email) {
		
		Contact contact = new Contact();
		contact.setEmail(email);
		contact.setName(name);
		contact.setMobile("9876543211");
		contact.setSalutation("Mr.");
		contact.setDesignation("Developer");
		contact.setRole(getRoles().get(0));
		contact.setContactorg(getContactOrg());
		contact.setContactType(getContactType());
		contact.setCreatedBy(1l);
		return contact;
	}
	private List<Role> getRoles() {
		
		List<Role> roleList = new ArrayList<>();
		Role role = new Role();
		role.setId(1l);
		role.setName("Admin");
		roleList.add(role);
		return roleList;
	}
	private ContactOrg getContactOrg() {
		
		ContactOrg contactOrg = new ContactOrg();
		contactOrg.setId(1l);
		contactOrg.setName("Euclid Innovations");
		contactOrg.setWebsite("www.euclidinnovations.com");
		return contactOrg;
	}
	private ContactType getContactType() {
		
		ContactType contactType = new ContactType();
		contactType.setId(1l);
		contactType.setName("Call");
		return contactType;
	}

	static {
		USER_DIR_PATH = System.getProperty("user.dir");
		IMPORT_CONTACTS_PATH = "/src/test/resources/com/euclid/dealbook/controller/";
	}
}
