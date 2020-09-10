package com.euclid.dealbook.bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.ActivityType;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.ActivityRepository;

@Repository
public class ActivityBeanImpl implements ActivityBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(ActivityBeanImpl.class);

	@Autowired
	private ActivityRepository activityRepository;

	@Autowired
	private ContactBeanImpl contactBeanImpl;

	@Autowired
	private ActivityTypeBeanImpl activityTypeBeanImpl;

	/**
	 * Method to Getting List of all Activity.
	 * 
	 * @return ActivityList
	 */
	@Override
	public List<Activity> getall() {
		LOGGER.debug("Getting List of all Activity");
		List<Activity> activityList = activityRepository.findAll();
		return activityList;

	}

	/**
	 * Method to Get Activity details.
	 * 
	 * @param Activity Id
	 * @return Activity
	 * @throws ApplicationException
	 */
	@Override
	public Activity get(long activityId) throws ApplicationException {
		try {
			LOGGER.debug("Get Activity details of - " + activityId + " Started");
			Optional<Activity> activityOptional = activityRepository.findById(activityId);
			if (!activityOptional.isPresent()) {
				throw new ApplicationException("Activity Not Found for Id " + activityId);
			}
			Activity activityObj = activityOptional.get();
			return activityObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Update Activity details.
	 * 
	 * @param Activity
	 * @return Activity
	 * @throws ApplicationException
	 */
	@Override
	public Activity save(Activity activity) throws ApplicationException {
		try {
			/*
			 * Get Activity
			 */
			Activity savedActivity = get(activity.getId());
			/*
			 * Update Activity Data
			 */
			updateActivityData(savedActivity, activity);

			/*
			 * Get Contact and Set to Activity
			 */
			if (null != activity.getContact() && null != activity.getContact().getId()) {
				Contact contactObj = contactBeanImpl.get(activity.getContact().getId());
				savedActivity.setContact(contactObj);
			}
			/*
			 * Get Parent and Set to Activity
			 */
			if (null != activity.getParent() && null != activity.getParent().getId()) {
				Activity parentActivityObj = get(activity.getParent().getId());
				savedActivity.setParent(parentActivityObj);
			}
			/*
			 * Get ActivityType and Set to Activity
			 */
			if (null != activity.getType() && null != activity.getType().getId()) {
				ActivityType activityTypeObj = activityTypeBeanImpl.get(activity.getType().getId());
				savedActivity.setType(activityTypeObj);
			}

			activityRepository.save(savedActivity);
			return get(savedActivity.getId());
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	private void updateActivityData(Activity savedActivity, Activity activity) {
		if (null == savedActivity || null == activity) {
			return;
		}
		if (null != activity.getSubject()) {
			savedActivity.setSubject(activity.getSubject());
		}
		if (null != activity.getNote()) {
			savedActivity.setNote(activity.getNote());
		}
		if (null != activity.getIsActive()) {
			savedActivity.setIsActive(activity.getIsActive());
		}
		if (null != activity.getIsPrivate()) {
			savedActivity.setIsPrivate(activity.getIsPrivate());
		}
		if (null != activity.getIsFollowup()) {
			savedActivity.setIsFollowup(activity.getIsFollowup());
		}
		if (null != activity.getFollowupDate()) {
			savedActivity.setFollowupDate(activity.getFollowupDate());
		}
		if (null != activity.getUpdatedBy()) {
			savedActivity.setUpdatedBy(activity.getUpdatedBy());
		}
		if (null != activity.getUpdatedByName()) {
			savedActivity.setUpdatedByName(activity.getUpdatedByName());
		}
		if (!activity.getIsFollowup()) {
			savedActivity.setFollowupDate(null);
		}
		/*
		 * Set UpdateOn
		 */
		Date updateOn = new Date();
		savedActivity.setUpdatedOn(updateOn);

	}

	/**
	 * Method to Delete Activity details.
	 * 
	 * @param Activity Id
	 * @return void
	 * @throws ApplicationException
	 */
	@Override
	public void delete(long activityId) throws ApplicationException {
		try {
			LOGGER.debug("Delete Activity detials of - " + activityId + " Started");
			Activity activityObj = get(activityId);
			if (null == activityObj) {
				return;
			}

			/*
			 * Check Activity is Parent Activity to anyOther
			 */
			List<Activity> activityList = activityRepository.findByparent(activityObj);
			if (!activityList.isEmpty()) {
				throw new ApplicationException("Can Not Delete Parent Activity");
			}

			/*
			 * Remove Activity Reference from Contact
			 */
			Contact contact = activityObj.getContact();
			if (null != contact) {
				Set<Activity> contactActivity = new HashSet<>();
				for (Activity activity : contact.getActivities()) {
					if (activity.getId().longValue() != activityObj.getId().longValue()) {
						contactActivity.add(activity);
					}
				}
				contact.setActivities(contactActivity);
				contactBeanImpl.save(contact);
			}
			activityRepository.deleteById(activityId);

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Create Activity details.
	 * 
	 * @param Activity
	 * @return Activity
	 * @throws ApplicationException
	 */
	@Override
	public Activity create(Activity activity) throws ApplicationException {
		try {
			/*
			 * Get Contact and Set to Activity
			 */
			if (null != activity.getContact() && null != activity.getContact().getId()) {
				Contact createdByObj = contactBeanImpl.get(activity.getContact().getId());
				activity.setContact(createdByObj);
			} else {
				activity.setContact(null);

			}

			/*
			 * Get Parent and Set to Activity
			 */
			if (null != activity.getParent() && null != activity.getParent().getId()) {
				Activity parentActivityObj = get(activity.getParent().getId());
				activity.setParent(parentActivityObj);
			} else {
				activity.setParent(null);
			}
			/*
			 * Get ActivityType and Set to Activity
			 */
			if (null != activity.getType() && null != activity.getType().getId()) {
				ActivityType activityTypeObj = activityTypeBeanImpl.get(activity.getType().getId());
				activity.setType(activityTypeObj);
			} else {
				activity.setType(null);
			}

			/*
			 * Set CreatedOn
			 */
			Date createOn = new Date();
			activity.setCreatedOn(createOn);

			activityRepository.save(activity);
			return get(activity.getId());

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Get Distinct UpdatedBy of Activity.
	 * 
	 * @return UpdatedBy List
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactDetailsView> findAllUpdatedBy() throws ApplicationException {
		try {
			LOGGER.debug("Get All UpdatedBy");
			List<ContactDetailsView> list = new ArrayList<>();
			List<Long> updatedByList = activityRepository.getDistinctUpdatedBy();
			if (!updatedByList.isEmpty()) {
				list = contactBeanImpl.getContactsByGivenId(updatedByList);

			}
			return list;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	@Override
	public List<Activity> saveAll(List<Activity> activities) throws ApplicationException {
		try {
			return activityRepository.saveAll(activities);
		} catch (Exception e) {
			throw new ApplicationException(e);
		}
	}

	/**
	 * Method to Get Distinct UpdatedBy and Created of Activity.
	 * 
	 * @return Contact List
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactDetailsView> findAllCreatedUpdatedBy() throws ApplicationException {
		try {
			LOGGER.debug("Get All Distinct CreatdedBy and UpdatedBy");
			List<ContactDetailsView> list = new ArrayList<>();
			List<Long> updatedByList = activityRepository.getDistinctUpdatedBy();
			List<Long> createdByList = activityRepository.getDistinctCreatedBy();

			Set<Long> distinctContactList = new LinkedHashSet<Long>();
			distinctContactList.addAll(updatedByList);
			distinctContactList.addAll(createdByList);

			List<Long> combinedList = new ArrayList<>(distinctContactList);

			if (!combinedList.isEmpty()) {
				list = contactBeanImpl.getContactsByGivenId(combinedList);

			}
			return list;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}
}
