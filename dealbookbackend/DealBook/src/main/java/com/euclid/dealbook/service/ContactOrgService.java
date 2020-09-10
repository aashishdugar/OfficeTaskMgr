package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.exception.ApplicationException;

public interface ContactOrgService {

	List<ContactOrg> getall() throws ApplicationException;

	ContactOrg get(long id) throws ApplicationException;

	ContactOrg create(ContactOrg contactOrg) throws ApplicationException;

	ContactOrg save(ContactOrg contactOrg) throws ApplicationException;

	void delete(long id) throws ApplicationException;

}
