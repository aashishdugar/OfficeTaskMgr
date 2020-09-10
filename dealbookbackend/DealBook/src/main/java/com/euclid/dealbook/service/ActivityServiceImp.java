package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.ActivityBean;
import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.ActivityValidator;

@Service
public class ActivityServiceImp implements ActivityService {
	private static final Logger LOGGER = LoggerFactory.getLogger(ActivityServiceImp.class);

	@Autowired
	private ActivityBean activityBean;

	@Autowired
	private ContactServiceImp contactServiceImp;

	@Override
	public List<Activity> getall() throws ApplicationException {
		try {
			LOGGER.debug("Get All Activity");
			List<Activity> activityList = activityBean.getall();
			for (Activity activity : activityList) {
				removeJsonIssue(activity);
			}
			return activityList;
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public Activity get(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get Activity");
			ActivityValidator.validateGet(id);
			Activity activity = activityBean.get(id);
			removeJsonIssue(activity);
			return activity;

		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public Activity create(Activity activity) throws ApplicationException {
		try {
			LOGGER.debug("Create Activity");
			ActivityValidator.validateCreate(activity);
			Activity activityObj = activityBean.create(activity);
			removeJsonIssue(activityObj);
			return activityObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public Activity save(Activity activity) throws ApplicationException {
		try {
			LOGGER.debug("Update Activity");
			ActivityValidator.validateUpdate(activity);
			Activity activityObj = activityBean.save(activity);
			removeJsonIssue(activityObj);
			return activityObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public void delete(long id) throws ApplicationException {
		try {
			LOGGER.debug("Delete Activity");
			ActivityValidator.validateDelete(id);
			activityBean.delete(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public void removeJsonIssue(Activity activity) {
		if (null == activity) {
			return;
		}

		contactServiceImp.removeJsonIssue(activity.getContact());
		if (null != activity.getParent()) {
			contactServiceImp.removeJsonIssue(activity.getParent().getContact());
		}

	}

	@Override
	public List<ContactDetailsView> findAllUpdatedBy() throws ApplicationException {
		try {
			LOGGER.debug("Get All UpdatedBy");
			return activityBean.findAllUpdatedBy();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public List<ContactDetailsView> findAllCreatedUpdatedBy() throws ApplicationException {
		try {
			LOGGER.debug("Get All CreatedUpdatedBy");
			return activityBean.findAllCreatedUpdatedBy();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

}
