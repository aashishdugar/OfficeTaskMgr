package com.euclid.dealbook.bean;

import java.util.List;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.utils.EmailService;

@Repository
public class UserCheckpointBeanImpl implements UserCheckpointBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserCheckpointBeanImpl.class);

	@Autowired
	private ContactBean contactBean;

	@Autowired
	private EmailService emailService;

	/**
	 * Method to Login Details.
	 * 
	 * @param Login Details
	 * @return ContactDetailsView
	 * @throws ApplicationException
	 */
	@Override
	public ContactDetailsView login(Contact user) throws ApplicationException {
		try {
			LOGGER.debug("Trying to loggin for user - {0}", user.getEmail());
			List<Contact> contactList = contactBean.findByEmail(user.getEmail());

			LOGGER.debug("Entered Password " + user.getPassword());

			Contact contactFromDB = contactList.get(0);
			LOGGER.debug("Database Password", contactFromDB.getPassword());

			if (Objects.isNull(contactFromDB.getIsUser()) || !contactFromDB.getIsUser()) {
				throw new ApplicationException("User does not have the permission to login");
			} else if (Objects.isNull(contactFromDB.getPassword())
					|| !contactFromDB.getPassword().equals(user.getPassword())) {
				throw new ApplicationException("Entered password is wrong.");
			}
			/*
			 * Need to release the token once user have logged in successfully.
			 **/
			if (Objects.nonNull(contactFromDB.getToken())) {
				contactFromDB.setToken(null);
				contactBean.save(contactFromDB);
			}
			ContactDetailsView contactDetailsView = new ContactDetailsView();
			contactDetailsView.setId(contactFromDB.getId());
			contactDetailsView.setName(contactFromDB.getName());
			contactDetailsView.setEmail(contactFromDB.getEmail());
			return contactDetailsView;
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());
		}
	}

	/**
	 * Method to Reset Password.
	 * 
	 * @param Contact
	 * @return void
	 * @throws ApplicationException
	 */
	@Override
	public void resetPassword(Contact user) throws ApplicationException {
		try {
			List<Contact> contactListFromDB = contactBean.findByEmail(user.getEmail());
			Contact contactFromDB = contactListFromDB.get(0);
			contactFromDB.setToken(emailService.generateToken());
			contactBean.save(contactFromDB);
			emailService.sendEmail(contactFromDB);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());
		}
	}

	/**
	 * Method to Change Password.
	 * 
	 * @param Contact
	 * @return void
	 * @throws ApplicationException
	 */
	@Override
	public void changePassword(Contact user) throws ApplicationException {
		try {
			Contact contactFromDB = contactBean.getContact(user.getEmail(), user.getToken());
			contactFromDB.setPassword(user.getPassword());
			contactFromDB.setToken(null);
			contactBean.save(contactFromDB);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());
		}
	}
}
