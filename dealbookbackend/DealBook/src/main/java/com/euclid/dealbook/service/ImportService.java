package com.euclid.dealbook.service;

import java.io.File;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.exception.ApplicationException;

/**
 * @author Bittu
 *
 */
public interface ImportService {

	/**
	 * Method to import contacts from the excel file. This method will read only xls
	 * and xlsx formated files. Method will throw {@linkplain ApplicationException}
	 * if any other formated files are present or file not found in the given
	 * location.
	 * 
	 * @param fileAbsolutePath
	 * @return
	 * @throws ApplicationException
	 */
	List<Contact> importContacts(MultipartFile file) throws ApplicationException;

	List<Contact> importContacts(File file) throws ApplicationException;

	List<Activity> importActivities(MultipartFile activityFile) throws ApplicationException;
}
