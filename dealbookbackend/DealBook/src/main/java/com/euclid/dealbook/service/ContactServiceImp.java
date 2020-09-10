package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.ContactBean;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.dao.ContactView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.ContactValidator;
import com.euclid.dealbook.vo.ContactHierachyVo;

@Service
public class ContactServiceImp implements ContactService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ContactServiceImp.class);

	@Autowired
	private ContactBean contactBean;

	@Override
	public List<ContactView> getall() throws ApplicationException {
		try {
			LOGGER.debug("Get All Contacts");
			return contactBean.getall();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public Contact get(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get Contact");
			ContactValidator.validateGet(id);
			Contact contactObj = contactBean.get(id);
			removeJsonIssue(contactObj);
			return contactObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public Contact create(Contact contact) throws ApplicationException {
		try {
			LOGGER.debug("Create Contact");
			ContactValidator.validateCreate(contact);
			return contactBean.create(contact);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public Contact save(Contact contact) throws ApplicationException {
		try {
			LOGGER.debug("Update Contact");
			ContactValidator.validateUpdate(contact);
			Contact contactObj = contactBean.save(contact);
			removeJsonIssue(contactObj);
			return contactObj;

		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public void delete(long id) throws ApplicationException {
		try {
			LOGGER.debug("Delete Contact");
			ContactValidator.validateDelete(id);
			contactBean.delete(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public List<ContactView> createBulkContacts(List<Contact> contactList) throws ApplicationException {
		try {
			LOGGER.debug("Create createBulkContacts");
			for (Contact contact : contactList) {
				ContactValidator.validateCreate(contact);

			}
			return contactBean.createBulkContacts(contactList);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public void removeJsonIssue(Contact contactObj) {
		if (null == contactObj) {
			return;
		}
		contactObj.setActivities(null);
		if (null != contactObj.getContactOwner()) {
			contactObj.getContactOwner().setActivities(null);
			contactObj.getContactOwner().setContactOwner(null);
			contactObj.getContactOwner().setReportingto(null);
		}
		if (null != contactObj.getReportingto()) {
			contactObj.getReportingto().setActivities(null);
			contactObj.getReportingto().setContactOwner(null);
			contactObj.getReportingto().setReportingto(null);

		}

	}

	@Override
	public List<String> findDistinctDesignation() throws ApplicationException {
		try {
			LOGGER.debug("Get Distinct Designation");
			return contactBean.findDistinctDesignation();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public List<ContactDetailsView> findAllContactOwner() throws ApplicationException {
		try {
			LOGGER.debug("Get All ContactOwner");
			return contactBean.findAllContactOwner();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public List<ContactDetailsView> findAllReportingTo() throws ApplicationException {
		try {
			LOGGER.debug("Get All ReportingTo");
			return contactBean.findAllReportingTo();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public ContactHierachyVo getParentHierachy(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get Contact Organization Hierachy");
			ContactValidator.validateGet(id);
			return contactBean.getParentHierachy(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

}
