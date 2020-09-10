package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.ActivityType;
import com.euclid.dealbook.exception.ApplicationException;

public interface ActivityTypeBean {

	List<ActivityType> getall() throws ApplicationException;

	ActivityType get(long id) throws ApplicationException;

	ActivityType findByName(String name) throws ApplicationException;
}
