package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.dao.ContactView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.vo.ContactHierachyVo;

public interface ContactBean {

	List<ContactView> getall() throws ApplicationException;

	Contact get(long id) throws ApplicationException;

	Contact save(Contact contact) throws ApplicationException;

	List<Contact> saveAll(List<Contact> contactList) throws ApplicationException;

	Contact create(Contact contact) throws ApplicationException;

	void delete(long id) throws ApplicationException;

	List<ContactView> createBulkContacts(List<Contact> contactList) throws ApplicationException;

	List<Contact> findByEmail(String email) throws ApplicationException;

	List<String> findDistinctDesignation() throws ApplicationException;

	List<ContactDetailsView> findAllContactOwner() throws ApplicationException;

	List<ContactDetailsView> findAllReportingTo() throws ApplicationException;

	Contact getContact(String email, Integer token) throws ApplicationException;

	List<ContactDetailsView> getContactsByGivenId(List<Long> contactId) throws ApplicationException;

	List<Contact> findByName(String name) throws ApplicationException;

	List<Contact> findByNameAndEmail(String name, String email) throws ApplicationException;

	List<Contact> findByEmailNoError(String email) throws ApplicationException;

	ContactHierachyVo getParentHierachy(long id) throws ApplicationException;

}
