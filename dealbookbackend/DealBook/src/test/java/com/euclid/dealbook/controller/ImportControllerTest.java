package com.euclid.dealbook.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.dao.ContactView;
import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.vo.Response;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ComponentScan("com.euclid.dealbook")
public class ImportControllerTest {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(ImportControllerTest.class);
	@Autowired
	private MockMvc mockMvc;
	
	private static final String IMPORT_CONTACTS_PATH =
			"/src/test/resources/com/euclid/dealbook/controller/";
	
	public ImportControllerTest() {}
	
//	@Test
//	public void testImportContactsEmptyFileName() {
//		
//		try {
//			RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
//					.contentType(MediaType.APPLICATION_JSON_VALUE)
//					.content(convertToJson(new File("")));
//			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
//			Response response = convertJsonToObj(
//					result.getResponse().getContentAsString(), Response.class);
//			
//			Assert.assertEquals("FAIL", response.getStatus());
//		} catch (Exception e) {
//			Assert.fail(e.getMessage());
//		}
//	}
//	@Test
//	public void testImportContactsDifferentFileName() {
//		try {
//			RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
//					.contentType(MediaType.APPLICATION_JSON_VALUE)
//					.content(convertToJson(new File("DummyFileName.txt")));
//			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
//			Response response = convertJsonToObj(
//					result.getResponse().getContentAsString(), Response.class);
//			
//			Assert.assertEquals("FAIL", response.getStatus());
//		} catch (Exception e) {
//			Assert.fail(e.getMessage());
//		}
//	}
//	@Test
//	public void testImportContactsFileNotExist() {
//		
//		try {
//			RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
//					.contentType(MediaType.APPLICATION_JSON_VALUE)
//					.content(convertToJson(new File("DummyFile.xlsx")));
//			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
//			Response response = convertJsonToObj(
//					result.getResponse().getContentAsString(), Response.class);
//			
//			Assert.assertEquals("FAIL", response.getStatus());
//		} catch (Exception e) {
//			Assert.fail(e.getMessage());
//		}
//	}
//	@Test
//	public void testImportContactsWhenAnyOneDataIsInvalid() {
//
//		Long reportingToContactId = createReportingToContact();
//		String fileLocation = System.getProperty("user.dir");
//		try {
//			String content = convertToJson(new File(fileLocation
//					+ IMPORT_CONTACTS_PATH + "2ContactImport.xlsx"));
//			RequestBuilder requestBuilder = MockMvcRequestBuilders
//					.post("/import/contacts")
//					.contentType(MediaType.APPLICATION_JSON_VALUE)
//					.content(content);
//			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
//			Response response = convertJsonToObj(
//					result.getResponse().getContentAsString(),
//					Response.class);
//			Assert.assertEquals("FAIL", response.getStatus());
//		} catch (Exception e) {
//			Assert.fail(e.getMessage());
//		} finally {
//			/*
//			 * Deleting the newly stored reporting to object
//			 * so that it should not store unrelated data
//			 * into the database.
//			 **/
//			deleteContact(reportingToContactId);
//		}
//	
//	}
//	@Test
//	public void testImportContactsFromFile() {
//		
//		Long reportingToContactId = createReportingToContact();
//		try {
//			String fileLocation = System.getProperty("user.dir");
//			String content = convertToJson(new File(fileLocation
//					+ IMPORT_CONTACTS_PATH + "1ContactImport.xlsx"));
//			RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
//					.contentType(MediaType.APPLICATION_JSON_VALUE)
//					.content(content);
//			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
//			Response response = convertJsonToObj(
//					result.getResponse().getContentAsString(),
//					Response.class);
//			/*
//			 * Below code is to check whether the object is
//			 * properly stored in the database or not.
//			 **/
//			if ("SUCCESS".equals(response.getStatus())) {
//				
//				Object contactListObj = response.getData();
//				if (contactListObj != null) {
//					
//					List<?> contactList = (List<?>) contactListObj;
//					contactList.stream()
//					.map(contact -> convertMapToPojo((Map<?, ?>) contact, Contact.class))
//					.sorted((ob1, ob2) -> ob2.getId().compareTo(ob1.getId()))
//					.forEach(contact -> deleteContact(contact.getId()));
//				} else {
//					Assert.fail("Assert failed.");
//				}
//			} else {
//				Assert.fail("Assert failed.");
//			}
//		} catch (Exception e) {
//			Assert.fail(e.getMessage());
//		} finally {
//			/*
//			 * Deleting the newly stored reporting to object
//			 * so that it should not store unrelated data
//			 * into the database.
//			 **/
//			deleteContact(reportingToContactId);
//		}
//	}
	
	@Test
	public void testImportContactsFromFile() {
		
		//Long reportingToContactId = createReportingToContact();
		try {
			String fileLocation = System.getProperty("user.dir");
			String content = convertToJson(new File(fileLocation
					+ IMPORT_CONTACTS_PATH + "euclidContacts.xlsx"));
			RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
					.contentType(MediaType.APPLICATION_JSON_VALUE)
					.content(content);
			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
			Response response = convertJsonToObj(
					result.getResponse().getContentAsString(),
					Response.class);
			/*
			 * Below code is to check whether the object is
			 * properly stored in the database or not.
			 **/
			if ("SUCCESS".equals(response.getStatus())) {
				
				Object contactListObj = response.getData();
				if (contactListObj != null) {
					
					List<?> contactList = (List<?>) contactListObj;
					contactList.stream()
					.map(contact -> convertMapToPojo((Map<?, ?>) contact, Contact.class))
					.sorted((ob1, ob2) -> ob2.getId().compareTo(ob1.getId()))
					.forEach(contact -> deleteContact(contact.getId()));
				} else {
					Assert.fail("Assert failed.");
				}
			} else {
				Assert.fail("Assert failed.");
			}
		} catch (Exception e) {
			Assert.fail(e.getMessage());
		} finally {
			/*
			 * Deleting the newly stored reporting to object
			 * so that it should not store unrelated data
			 * into the database.
			 **/
			//deleteContact(reportingToContactId);
		}
	}
	/**
	 * Method to convert json string to object which passed as a parameter.
	 * @param <T>
	 * @param jsonString
	 * @param classObj
	 * @return
	 * @throws IOException
	 * @throws JsonParseException
	 * @throws JsonMappingException
	 * @throws UnsupportedEncodingException
	 */
	private <T> T convertJsonToObj(String jsonString, Class<T> classObj)
			throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		return (T) mapper.readValue(jsonString, classObj);
	}
	/**
	 * Method to convert map object to pojo object class
	 * @param <T>
	 * @param <K>
	 * @param <V>
	 * @param fromValue
	 * @param toValueType
	 * @return
	 */
	private <T,K,V> T convertMapToPojo(Map<K, V> fromValue,
			Class<T> toValueType) {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.convertValue(fromValue, toValueType);
	}
	/**
	 * Method to convert java object to json object.
	 * @param <T>
	 * @param object
	 * @return String
	 * @throws JsonProcessingException 
	 */
	private <T> String convertToJson(T object) throws JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(object);
	}
	/**
	 * Method to delete a contact from database.
	 * @param id
	 */
	private void deleteContact(Long id) {
		try {
			RequestBuilder requestBuilder = MockMvcRequestBuilders
					.post("/contact/delete/{id}", id)
					.contentType(MediaType.APPLICATION_JSON)
		            .accept(MediaType.APPLICATION_JSON);
			mockMvc.perform(requestBuilder)
			.andExpect(MockMvcResultMatchers.status().isOk());
		} catch (Exception e) {
			LOGGER.error("Exception while performing delete operation for id: " + id, e);
		}
	}
	private Long getContactIdByEmail(String email, String name) {
		try {
			RequestBuilder requestBuilder = MockMvcRequestBuilders
					.post("/contact/getall")
					.contentType(MediaType.APPLICATION_JSON)
		            .accept(MediaType.APPLICATION_JSON);
			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
			Response response = convertJsonToObj(
					result.getResponse().getContentAsString(),
					Response.class);
			List<?> listOfContactView = (List<?>) response.getData();
			Object contactObj = listOfContactView.stream().filter(obj ->{
				ContactView contactView = convertMapToPojo(
						(Map<?, ?>) obj, ContactView.class);
				return email.equalsIgnoreCase(contactView.getEmail())
						&& name.equalsIgnoreCase(contactView.getName());
			}).findFirst().get();
			return convertMapToPojo((Map<?, ?>) contactObj, ContactView.class).getId();
		} catch (Exception e) {
			LOGGER.error("Exception while getting id for email: {0} and {1}", email, name);
		}
		return null;
	}
	
	/**
	 * Method will create a {@linkplain Contact} object for
	 * reporting to and will return the contact id.
	 * This reporting to contact email ID will be reported by
	 * the contacts present in the excel file.
	 * 
	 * This contact is created so that it should not fail when
	 * same reporting to email address not found in db. 
	 * @return contactId
	 */
	private Long createReportingToContact() {
		
		try {
			Contact reportingTo = getReportingTo();
			String content = convertToJson(reportingTo);
			RequestBuilder requestBuilder = MockMvcRequestBuilders
					.post("/contact/create")
					.contentType(MediaType.APPLICATION_JSON_VALUE)
					.content(content);
			mockMvc.perform(requestBuilder)
			.andExpect(MockMvcResultMatchers.status().isOk());
			return getContactIdByEmail(reportingTo.getEmail(), reportingTo.getName());
		} catch (Exception e) {
			throw new RuntimeException("Can not process the test" + e.getMessage());
		}
	}
	private Contact getReportingTo() {
		
		Contact contact = new Contact();
		contact.setEmail("alokraha@gmail.com");
		contact.setName("Alok Raha");
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
		contactOrg.setName("Euclid");
		contactOrg.setWebsite("www.euclidinnovations.com");
		return contactOrg;
	}
	private ContactType getContactType() {
		
		ContactType contactType = new ContactType();
		contactType.setId(1l);
		contactType.setName("Call");
		return contactType;
	}
}
