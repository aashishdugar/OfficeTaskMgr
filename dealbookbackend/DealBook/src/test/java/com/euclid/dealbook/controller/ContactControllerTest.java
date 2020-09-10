//package com.euclid.dealbook.controller;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.RequestBuilder;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//@ComponentScan("com.euclid.dealbook")
//public class ContactControllerTest {
//
//	private static final Logger LOGGER = LoggerFactory.getLogger(ContactControllerTest.class);
//	@Autowired
//	private MockMvc mockMvc;
//
////	private static final String IMPORT_CONTACTS_PATH =
////			"/src/test/resources/com/euclid/dealbook/controller/";
//
//	public ContactControllerTest() {
//	}
//
//	/**
//	 * Method to delete a contact from database.
//	 * 
//	 * @param id
//	 */
//	Long id = 75l;
////	@Test
////	public void delete() {
////		try {
////			RequestBuilder requestBuilder = MockMvcRequestBuilders
////					.post("/contact/delete/{id}", id)
////					.contentType(MediaType.APPLICATION_JSON)
////		            .accept(MediaType.APPLICATION_JSON);
////			mockMvc.perform(requestBuilder)
////			.andExpect(MockMvcResultMatchers.status().isOk());
////		} catch (Exception e) {
////			LOGGER.error("Exception while performing delete operation for id: " + id, e);
////		}
////	}
//
//	@Test
//	public void get() {
//		try {
//			String expectedData = "{\"data\":{\"id\":75,\"email\":\"a@dddh.com\",\"mobile\":null,\"createdOn\":null,\"updatedOn\":null,\"description\":null,\"name\":null,\"designation\":null,\"salutation\":null,\"blogurl\":null,\"linkedin\":null,\"twitter\":null,\"facebook\":null,\"dob\":null,\"isActive\":true,\"isUser\":false,\"role\":null,\"address\":null,\"contactorg\":null,\"reportingto\":null,\"contacttype\":null,\"contactOwner\":null,\"activities\":[]},\"msg\":null,\"errormsg\":\"\"}";
//			RequestBuilder requestBuilder = MockMvcRequestBuilders
//					.post("/contact/get/{id}", id)
//					.contentType(MediaType.APPLICATION_JSON)
//		            .accept(MediaType.APPLICATION_JSON);
//			mockMvc.perform(requestBuilder)
//		//	.andExpect(MockMvcResultMatchers.status().isOk());
//			.andExpect(MockMvcResultMatchers.jsonPath("$.data").value(expectedData));
//			Assert.eq
//		} catch (Exception e) {
//			LOGGER.error("Exception while performing get operation for id: " + id, e);
//		}
//	}
//
////	@Test
////	public void getall() {
////		try {
////			String expectedData = "{"status":"SUCCESS","data":{"id":75,"email":"aa@dddh.com","mobile":null,"createdOn":null,"updatedOn":null,"description":null,"name":null,"designation":null,"salutation":null,"blogurl":null,"linkedin":null,"twitter":null,"facebook":null,"dob":null,"isActive":true,"isUser":false,"role":null,"address":null,"contactorg":null,"reportingto":null,"contacttype":null,"contactOwner":null,"activities":[]},"msg":null,"errormsg":""}";
////			RequestBuilder requestBuilder = MockMvcRequestBuilders
////					.post("/contact/getall")
////					.contentType(MediaType.APPLICATION_JSON)
////		            .accept(MediaType.APPLICATION_JSON);
////			mockMvc.perform(requestBuilder)
////			.andExpect(MockMvcResultMatchers.jsonPath("$.data").value(expectedData));
////
//////			.andExpect(MockMvcResultMatchers.status().isOk());
////		} catch (Exception e) {
////			LOGGER.error("Exception while performing delete operation for id: " + id, e);
////		}
////	}
//
////	@Test
////	public void testImportContactsEmptyFileName() {
////		RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
////				.contentType(MediaType.TEXT_PLAIN_VALUE)
////				.content(" ");
////		try {
////			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
////			Response response = convertJsonToObj(
////					result.getResponse().getContentAsString(), Response.class);
////			
////			Assert.assertEquals("FAIL", response.getStatus());
////		} catch (Exception e) {
////			Assert.fail(e.getMessage());
////		}
////	}
////	@Test
////	public void testImportContactsDifferentFileName() {
////		RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
////				.contentType(MediaType.TEXT_PLAIN_VALUE)
////				.content("DummyFileName.txt");
////		try {
////			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
////			Response response = convertJsonToObj(
////					result.getResponse().getContentAsString(), Response.class);
////			
////			Assert.assertEquals("FAIL", response.getStatus());
////		} catch (Exception e) {
////			Assert.fail(e.getMessage());
////		}
////	}
////	@Test
////	public void testImportContactsFileNotExist() {
////		
////		RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
////				.contentType(MediaType.TEXT_PLAIN_VALUE)
////				.content("DummyFile.xlsx");
////		try {
////			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
////			Response response = convertJsonToObj(
////					result.getResponse().getContentAsString(), Response.class);
////			
////			Assert.assertEquals("FAIL", response.getStatus());
////		} catch (Exception e) {
////			Assert.fail(e.getMessage());
////		}
////	}
////	@Test
////	public void testImportContactsWhenAnyOneDataIsInvalid() {
////
////		Long reportingToContactId = createReportingToContact();
////		String fileLocation = System.getProperty("user.dir");
////		RequestBuilder requestBuilder = MockMvcRequestBuilders
////				.post("/import/contacts")
////				.contentType(MediaType.TEXT_PLAIN_VALUE)
////				.content(fileLocation + IMPORT_CONTACTS_PATH
////						+ "2ContactImport.xlsx");
////		try {
////			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
////			Response response = convertJsonToObj(
////					result.getResponse().getContentAsString(),
////					Response.class);
////			Assert.assertEquals("FAIL", response.getStatus());
////		} catch (Exception e) {
////			Assert.fail(e.getMessage());
////		} finally {
////			/*
////			 * Deleting the newly stored reporting to object
////			 * so that it should not store unrelated data
////			 * into the database.
////			 **/
////			deleteContact(reportingToContactId);
////		}
////	
////	}
////	@Test
////	public void testImportContactsFromFile() {
////		
////		Long reportingToContactId = createReportingToContact();
////		String fileLocation = System.getProperty("user.dir");
////		RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/import/contacts")
////				.contentType(MediaType.TEXT_PLAIN_VALUE)
////				.content(fileLocation + IMPORT_CONTACTS_PATH
////						+ "1ContactImport.xlsx");
////		try {
////			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
////			Response response = convertJsonToObj(
////					result.getResponse().getContentAsString(),
////					Response.class);
////			/*
////			 * Below code is to check whether the object is
////			 * properly stored in the database or not.
////			 **/
////			if ("SUCCESS".equals(response.getStatus())) {
////				
////				Object contactListObj = response.getData();
////				if (contactListObj != null) {
////					
////					List<?> contactList = (List<?>) contactListObj;
////					contactList.stream().forEach(contact -> {
////						
////						Contact con = convertMapToPojo((Map<?, ?>) contact, Contact.class);
////						Long id = con.getId();
////						if (id != null) {
////							/*
////							 * Deleting the newly stored dummy object
////							 * so that it should not store unrelated data
////							 * into the database.
////							 **/
////							deleteContact(id);
////						} else {
////							Assert.fail("In response id is null");
////						}
////					});
////				}
////				Assert.assertTrue(true);
////			}
////		} catch (Exception e) {
////			Assert.fail(e.getMessage());
////		} finally {
////			/*
////			 * Deleting the newly stored reporting to object
////			 * so that it should not store unrelated data
////			 * into the database.
////			 **/
////			deleteContact(reportingToContactId);
////		}
////	}
////	/**
////	 * Method to convert json string to object which passed as a parameter.
////	 * @param <T>
////	 * @param jsonString
////	 * @param classObj
////	 * @return
////	 * @throws IOException
////	 * @throws JsonParseException
////	 * @throws JsonMappingException
////	 * @throws UnsupportedEncodingException
////	 */
////	private <T> T convertJsonToObj(String jsonString, Class<T> classObj)
////			throws JsonParseException, JsonMappingException, IOException {
////		ObjectMapper mapper = new ObjectMapper();
////		return (T) mapper.readValue(jsonString, classObj);
////	}
////	/**
////	 * Method to convert map object to pojo object class
////	 * @param <T>
////	 * @param <K>
////	 * @param <V>
////	 * @param fromValue
////	 * @param toValueType
////	 * @return
////	 */
////	private <T,K,V> T convertMapToPojo(Map<K, V> fromValue,
////			Class<T> toValueType) {
////		ObjectMapper mapper = new ObjectMapper();
////		return mapper.convertValue(fromValue, toValueType);
////	}
////	/**
////	 * Method to convert java object to json object.
////	 * @param <T>
////	 * @param object
////	 * @return String
////	 * @throws JsonProcessingException 
////	 */
////	private <T> String convertToJson(T object) throws JsonProcessingException {
////		ObjectMapper mapper = new ObjectMapper();
////		return mapper.writeValueAsString(object);
////	}
////	
////	/**
////	 * Method will create a {@linkplain Contact} object for
////	 * reporting to and will return the contact id.
////	 * This reporting to contact email ID will be reported by
////	 * the contacts present in the excel file.
////	 * 
////	 * This contact is created so that it should not fail when
////	 * same reporting to email address not found in db. 
////	 * @return contactId
////	 */
////	private Long createReportingToContact() {
////		
////		try {
////			String content = convertToJson(getReportingTo());
////			RequestBuilder requestBuilder = MockMvcRequestBuilders
////					.post("/contact/create")
////					.contentType(MediaType.APPLICATION_JSON_VALUE)
////					.content(content);
////			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
////			Response response = convertJsonToObj(
////					result.getResponse().getContentAsString(), Response.class);
////			Contact contact = convertMapToPojo((Map<?, ?>) response.getData(),
////					Contact.class);
////			return contact.getId();
////		} catch (Exception e) {
////			throw new RuntimeException("Can not process the test", e);
////		}
////	}
////	private Contact getReportingTo() {
////		
////		Contact contact = new Contact();
////		contact.setEmail("alokraha@gmail.com");
////		contact.setName("Alok Raha");
////		contact.setMobile("9876543211");
////		contact.setSalutation("Mr.");
////		contact.setDesignation("Developer");
////		contact.setRole(getRoles().get(0));
////		contact.setContactorg(getContactOrg());
////		contact.setContacttype(getContactType());
////		return contact;
////	}
////	private List<Role> getRoles() {
////		
////		List<Role> roleList = new ArrayList<>();
////		Role role = new Role();
////		role.setId(1l);
////		role.setName("Admin");
////		roleList.add(role);
////		return roleList;
////	}
////	private ContactOrg getContactOrg() {
////		
////		ContactOrg contactOrg = new ContactOrg();
////		contactOrg.setId(1l);
////		contactOrg.setName("Euclid");
////		contactOrg.setWebsite("www.euclidinnovations.com");
////		return contactOrg;
////	}
////	private ContactType getContactType() {
////		
////		ContactType contactType = new ContactType();
////		contactType.setId(1l);
////		contactType.setName("Call");
////		return contactType;
////	}
//}
