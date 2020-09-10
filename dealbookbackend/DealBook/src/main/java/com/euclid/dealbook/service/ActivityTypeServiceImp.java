package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.ActivityTypeBean;
import com.euclid.dealbook.dao.ActivityType;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.ActivityTypeValidator;

@Service
public class ActivityTypeServiceImp implements ActivityTypeService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ActivityTypeServiceImp.class);

	@Autowired
	private ActivityTypeBean activityTypeBean;

	@Override
	public List<ActivityType> getall() throws ApplicationException {
		try {
			LOGGER.debug("Get All Contacts");
			return activityTypeBean.getall();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public ActivityType get(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get ActivityType");
			ActivityTypeValidator.validateGet(id);
			return activityTypeBean.get(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

}
