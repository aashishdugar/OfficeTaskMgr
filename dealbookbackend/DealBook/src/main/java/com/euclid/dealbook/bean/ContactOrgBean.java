package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.exception.ApplicationException;

public interface ContactOrgBean {

	List<ContactOrg> getall() throws ApplicationException;

	ContactOrg get(long id) throws ApplicationException;

	ContactOrg findByName(String name) throws ApplicationException;

	ContactOrg save(ContactOrg contactOrg) throws ApplicationException;

	void delete(long contactOrgId) throws ApplicationException;

	ContactOrg create(ContactOrg contactOrg) throws ApplicationException;
}
