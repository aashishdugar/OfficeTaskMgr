package com.euclid.dealbook.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.UserCheckpointBean;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.UserValidator;

@Service
public class UserCheckpointServiceImpl implements UserCheckpointService {

	@Autowired
	private UserCheckpointBean userCheckpointBean;

	@Override
	public ContactDetailsView login(Contact user) throws ApplicationException {
		try {
			UserValidator.validateUserEmailAndPassword(user);
			return userCheckpointBean.login(user);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());
		}
	}

	@Override
	public void resetPassword(Contact user) throws ApplicationException {
		try {
			UserValidator.validateUserEmail(user);
			userCheckpointBean.resetPassword(user);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());
		}
	}

	@Override
	public void changePassword(Contact user) throws ApplicationException {
		try {
			UserValidator.validateUserToChangePassword(user);
			userCheckpointBean.changePassword(user);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());
		}
	}
}
