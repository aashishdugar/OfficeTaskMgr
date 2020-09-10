package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.dao.ActivityType;
import com.euclid.dealbook.exception.ApplicationException;

public interface ActivityTypeService {

	List<ActivityType> getall() throws ApplicationException;

	ActivityType get(long id) throws ApplicationException;

}
