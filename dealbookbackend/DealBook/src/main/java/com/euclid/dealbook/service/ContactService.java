package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.dao.ContactView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.vo.ContactHierachyVo;

public interface ContactService {

	Contact create(Contact contact) throws ApplicationException;

	List<ContactView> getall() throws ApplicationException;

	Contact get(long id) throws ApplicationException;

	Contact save(Contact contact) throws ApplicationException;

	void delete(long id) throws ApplicationException;

	List<ContactView> createBulkContacts(List<Contact> contactList) throws ApplicationException;

	void removeJsonIssue(Contact contact);

	List<String> findDistinctDesignation() throws ApplicationException;

	List<ContactDetailsView> findAllContactOwner() throws ApplicationException;

	List<ContactDetailsView> findAllReportingTo() throws ApplicationException;

	ContactHierachyVo getParentHierachy(long id) throws ApplicationException;

}
