package com.euclid.dealbook.bean;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ActivityType;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.ActivityTypeRepository;

@Repository
public class ActivityTypeBeanImpl implements ActivityTypeBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(CountryBeanImpl.class);

	@Autowired
	private ActivityTypeRepository activityTypeRepository;

	/**
	 * Method to find ActivityTypeList.
	 * 
	 * @return ActivityTypeList
	 */
	@Override
	public List<ActivityType> getall() {
		LOGGER.debug("Getting List of all ActivityType");
		return (List<ActivityType>) activityTypeRepository.findAll();

	}

	/**
	 * Method to Get ActivityType.
	 * 
	 * @param ActivityType Id
	 * @return ActivityType
	 * @throws ApplicationException
	 */
	@Override
	public ActivityType get(long activityTypeId) throws ApplicationException {
		try {
			LOGGER.debug("Get ActivityType details of - " + activityTypeId + " Started");
			Optional<ActivityType> activityTypeOptional = activityTypeRepository.findById(activityTypeId);
			if (!activityTypeOptional.isPresent()) {
				throw new ApplicationException("ActivityType Not Found for Id " + activityTypeId);
			}
			ActivityType activityTypeObj = activityTypeOptional.get();
			return activityTypeObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get ActivityType using ActivityType Name.
	 * 
	 * @param ActivityType Name
	 * @return ActivityType
	 * @throws ApplicationException
	 */
	@Override
	public ActivityType findByName(String name) throws ApplicationException {
		try {
			LOGGER.debug("Get ActivityType details of - " + name + " Started");
			Optional<ActivityType> activityTypeOptional = activityTypeRepository.findByName(name);
			if (!activityTypeOptional.isPresent()) {
				throw new ApplicationException("ActivityType Not Found for Name " + name);
			}
			ActivityType activityTypeObj = activityTypeOptional.get();
			return activityTypeObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

}
