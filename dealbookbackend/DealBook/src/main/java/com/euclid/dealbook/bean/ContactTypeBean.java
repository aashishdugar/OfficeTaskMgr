package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.exception.ApplicationException;

public interface ContactTypeBean {

	List<ContactType> getall() throws ApplicationException;

	ContactType get(long id) throws ApplicationException;

	List<ContactType> findByName(String name) throws ApplicationException;
}
