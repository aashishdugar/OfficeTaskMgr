package com.euclid.dealbook.service;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.ApplicationException;

public interface UserCheckpointService {

	/**
	 * Method to do login check.
	 * 
	 * @param user
	 * @return boolean
	 * @throws ApplicationException
	 */
	ContactDetailsView login(Contact user) throws ApplicationException;

	/**
	 * @param user
	 * @return
	 * @throws ApplicationException
	 */
	void resetPassword(Contact user) throws ApplicationException;

	/**
	 * Method to reset the password
	 * 
	 * @param user
	 * @throws ApplicationException
	 */
	void changePassword(Contact user) throws ApplicationException;
}
