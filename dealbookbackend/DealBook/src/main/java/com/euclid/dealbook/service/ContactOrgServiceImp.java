package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.ContactOrgBean;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.ContactOrgValidator;

@Service
public class ContactOrgServiceImp implements ContactOrgService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ContactOrgServiceImp.class);

	@Autowired
	private ContactOrgBean contactOrgBean;

	@Override
	public List<ContactOrg> getall() throws ApplicationException {
		try {
			LOGGER.debug("Get All ContactOrg");
			return contactOrgBean.getall();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public ContactOrg get(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get ContactOrg");
			ContactOrgValidator.validateGet(id);
			return contactOrgBean.get(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public ContactOrg create(ContactOrg contactOrg) throws ApplicationException {
		try {
			LOGGER.debug("Create ContactOrg");
			ContactOrgValidator.validateCreate(contactOrg);
			return contactOrgBean.create(contactOrg);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public ContactOrg save(ContactOrg contactOrg) throws ApplicationException {
		try {
			LOGGER.debug("Update ContactOrg");
			ContactOrgValidator.validateUpdate(contactOrg);
			return contactOrgBean.save(contactOrg);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public void delete(long id) throws ApplicationException {
		try {
			LOGGER.debug("Delete ContactOrg");
			ContactOrgValidator.validateDelete(id);
			contactOrgBean.delete(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

}
