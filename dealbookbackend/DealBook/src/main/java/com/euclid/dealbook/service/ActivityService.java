package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.ApplicationException;

public interface ActivityService {

	Activity create(Activity activity) throws ApplicationException;

	List<Activity> getall() throws ApplicationException;

	Activity get(long id) throws ApplicationException;

	Activity save(Activity activity) throws ApplicationException;

	void delete(long id) throws ApplicationException;

	void removeJsonIssue(Activity activity);

	List<ContactDetailsView> findAllUpdatedBy() throws ApplicationException;

	List<ContactDetailsView> findAllCreatedUpdatedBy() throws ApplicationException;

}
