package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.ApplicationException;

public interface ActivityBean {

	List<Activity> getall() throws ApplicationException;

	Activity get(long id) throws ApplicationException;

	Activity save(Activity activity) throws ApplicationException;

	Activity create(Activity activity) throws ApplicationException;

	void delete(long id) throws ApplicationException;

	List<ContactDetailsView> findAllUpdatedBy() throws ApplicationException;

	List<Activity> saveAll(List<Activity> activities) throws ApplicationException;

	List<ContactDetailsView> findAllCreatedUpdatedBy() throws ApplicationException;

}
