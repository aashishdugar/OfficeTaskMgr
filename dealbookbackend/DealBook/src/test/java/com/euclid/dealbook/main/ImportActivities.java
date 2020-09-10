package com.euclid.dealbook.main;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.util.MultiValueMap;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.euclid.dealbook.vo.Response;

public class ImportActivities {

	/**
	 * url will contain domain name and the location of the API
	 */
	private static final String BASE_URL;
	/**
	 * URI to import the activity using which will take
	 * {@link File} object as an input
	 */
	private static final String IMPORT_ACTIVITY_FILE_URI;
	/**
	 * URI to import the activity using which will take
	 * {@link MultipartFile} object as an input
	 */
	private static final String IMPORT_ACTIVITY_MULTIPART_URI;
	/**
	 * Need to provide the path and file name of the excel file.
	 */
	private static final String FILE_PATH_NAME;
	private static final WebClient webClient;
	private static final Logger LOGGER = LoggerFactory.getLogger(ImportActivities.class);
	private static enum ImportType {
		File, MultipartFile;
	}
	static {		
		BASE_URL = "http://localhost:8080/import";
		IMPORT_ACTIVITY_FILE_URI = "/activity";
		IMPORT_ACTIVITY_MULTIPART_URI = "/impactivity";
		FILE_PATH_NAME = "D:\\DealBook\\temp\\activity\\1ValidActivity.xlsx";
		webClient = createWebClient();
	}
	
	public static void main(String[] args) {
		/*
		 * You can use either of any one way File or
		 * MultipartFile to import the activities to DB.
		 **/
		ImportType importType = ImportType.MultipartFile;
		if (ImportType.File.equals(importType)) {
			importActivitiesUsingFileObject();
		} else {
			importActivitiesUsingMultipartFile();
		}
	}
	/**
	 * Method to import all the activities from excel file.
	 * This method will take {@link File} object as input.
	 */
	private static void importActivitiesUsingFileObject() {
		
		LOGGER.info("Calling URI to import the activities using file import.");
		Response response = webClient.post()
				.uri(IMPORT_ACTIVITY_FILE_URI)
				.contentType(MediaType.APPLICATION_JSON)
				.syncBody(getFile())
				.retrieve()
				.bodyToMono(Response.class)
				.block();
		LOGGER.info("Received response from the server: ", response);
		validateResponse(response);
	}
	/**
	 * Method to check the response which we received is
	 * success or failed.
	 * @param response
	 */
	private static void validateResponse(Response response) {
		if (response != null) {
			if ("SUCCESS".equals(response.getStatus())) {
				LOGGER.info("Activities are imported successfully");
			} else {
				LOGGER.info("Failed to import activities.");
			}
		} else {
			LOGGER.info("Null response received");
		}
	}
	/**
	 * Method to create object for {@link WebClient} which
	 * will be having base URI as {@link #BASE_URL}
	 * @return
	 */
	private static WebClient createWebClient() {
		return WebClient
				.builder()
				.baseUrl(BASE_URL)
				.build();
	}
	private static File getFile() {
		return new File(FILE_PATH_NAME);
	}
	/**
	 * Method to import all the activities from excel file.
	 * The way of importing excel file would be using multipart file.
	 */
	private static void importActivitiesUsingMultipartFile() {
		
		MultiValueMap<String,HttpEntity<?>> multipartData = createMultipartData();
		LOGGER.info("Calling URI to import the activities using file import.");
		Response response = webClient.post()
				.uri(IMPORT_ACTIVITY_MULTIPART_URI)
				.contentType(MediaType.MULTIPART_FORM_DATA)
				.body(BodyInserters.fromMultipartData(multipartData))
				.retrieve()
				.bodyToMono(Response.class)
				.block();
		LOGGER.info("Received response from the server: ", response);
		validateResponse(response);
	}
	/**
	 * Method which created a multipart data from the file.
	 * @return MultiValueMap
	 */
	private static MultiValueMap<String, HttpEntity<?>> createMultipartData() {
		
		LOGGER.info("Creating Multipart Data");
		MultipartBodyBuilder builder = new MultipartBodyBuilder();
		String header = String.format("form-data; name=%s; filename=%s", "file", FILE_PATH_NAME);
		try {
			byte[] byteArr = Files.readAllBytes(Paths.get(FILE_PATH_NAME));
			builder.part("file", byteArr).header("Content-Disposition", header);			
		} catch (IOException e) {
			LOGGER.error("Exception while converting file to byte array", e);
		}
		LOGGER.info("Multipart Data Created successfully.");
		return builder.build();
	}
}
