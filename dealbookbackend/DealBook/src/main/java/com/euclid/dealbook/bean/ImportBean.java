package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.excel.ImpActivity;
import com.euclid.dealbook.exception.ApplicationException;

public interface ImportBean {

	/**
	 * Method to import all the contacts in the database.
	 * 
	 * @param contacts
	 * @return List
	 * @throws ApplicationException
	 */
	List<Contact> importContacts(List<Contact> contacts) throws ApplicationException;

	List<Activity> importActivities(List<ImpActivity> activityList) throws ApplicationException;
}
