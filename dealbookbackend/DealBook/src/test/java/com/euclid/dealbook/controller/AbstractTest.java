package com.euclid.dealbook.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Map;

import org.junit.runner.RunWith;
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

import com.euclid.dealbook.vo.Response;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ComponentScan("com.euclid.dealbook")
public class AbstractTest {
	
	@Autowired
	protected MockMvc mockMvc;
	
	protected Response postMethodCall(String uriTemplate,
			MediaType mediaType) throws Exception {
		try {
			RequestBuilder requestBuilder = MockMvcRequestBuilders
					.post(uriTemplate)
					.contentType(mediaType);
			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
			return convertJsonToObj(
					result.getResponse().getContentAsString(),
					Response.class);
		} catch (Exception e) {
			throw new Exception(e);
		}
	}
	protected Response postMethodCall(String uriTemplate,
			MediaType mediaType, String content)
			throws Exception {
		try {
			RequestBuilder requestBuilder = MockMvcRequestBuilders
					.post(uriTemplate)
					.contentType(mediaType)
					.content(content);
			MvcResult result = mockMvc.perform(requestBuilder).andReturn();
			return convertJsonToObj(
					result.getResponse().getContentAsString(),
					Response.class);
		} catch (Exception e) {
			throw new Exception(e);
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
	protected <T> T convertJsonToObj(String jsonString, Class<T> classObj)
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
	protected <T,K,V> T convertMapToObject(Map<K, V> fromValue,
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
	protected <T> String convertObjectToJson(T object) throws JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(object);
	}
}
