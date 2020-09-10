package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.UserWidgetBean;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.UserWidget;
import com.euclid.dealbook.dao.UserWidgetView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.UserWidgetValidator;
import com.euclid.dealbook.vo.UserWidgetResponse;

@Service
public class UserWidgetServiceImp implements UserWidgetService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserWidgetServiceImp.class);

	@Autowired
	private UserWidgetBean userWidgetBean;

	@Autowired
	private ContactServiceImp contactServiceImp;

	@Override
	public List<UserWidgetView> getall() throws ApplicationException {
		try {
			LOGGER.debug("Get All UserWidget");
			return userWidgetBean.getall();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public UserWidget get(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get UserWidget");
			UserWidgetValidator.validateGet(id);
			UserWidget userWidget = userWidgetBean.get(id);
			removeJsonIssue(userWidget);
			return userWidget;
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public UserWidgetResponse create(UserWidget userWidget) throws ApplicationException {
		try {
			LOGGER.debug("Create UserWidget");
			UserWidgetValidator.validateCreate(userWidget);
			UserWidgetResponse response = userWidgetBean.create(userWidget);
			removeJsonIssue(response);
			return response;

		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public void save(UserWidget userWidget) throws ApplicationException {
		try {
			LOGGER.debug("Update UserWidget");
			UserWidgetValidator.validateUpdate(userWidget);
			userWidgetBean.save(userWidget);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public void delete(long id) throws ApplicationException {
		try {
			LOGGER.debug("Delete UserWidget");
			UserWidgetValidator.validateDelete(id);
			userWidgetBean.delete(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public void removeJsonIssue(UserWidget userWidgetObj) {
		if (null == userWidgetObj) {
			return;
		}
		if (null != userWidgetObj.getOwner()) {
			contactServiceImp.removeJsonIssue(userWidgetObj.getOwner());
		}

	}

	public void removeJsonIssue(UserWidgetResponse response) {
		if (null == response) {
			return;
		}
		if (!response.getContactList().isEmpty()) {
			for (Contact contact : response.getContactList()) {
				contactServiceImp.removeJsonIssue(contact);
			}

		}

	}

}
