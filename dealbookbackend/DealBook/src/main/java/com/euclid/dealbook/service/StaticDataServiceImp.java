package com.euclid.dealbook.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.StaticDataBean;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.ContactValidator;
import com.euclid.dealbook.vo.ContactStaticVo;
import com.euclid.dealbook.vo.UserWidgetResponse;

@Service
public class StaticDataServiceImp implements StaticDataService {

	private static final Logger LOGGER = LoggerFactory.getLogger(StaticDataServiceImp.class);

	@Autowired
	private StaticDataBean staticDataBean;

	@Autowired
	private ContactServiceImp contactServiceImp;

	@Override
	public ContactStaticVo getStatic(long contactId) throws ApplicationException {
		try {
			LOGGER.debug("Get Static Data for Contacts");
			ContactValidator.validateGet(contactId);
			ContactStaticVo contactStaticVo = staticDataBean.getStatic(contactId);
			removeJsonIssue(contactStaticVo);
			return contactStaticVo;
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	public void removeJsonIssue(ContactStaticVo contactStaticVo) {
		if (null == contactStaticVo) {
			return;
		}
		if (!contactStaticVo.getUserWidgetList().isEmpty()) {
			for (UserWidgetResponse response : contactStaticVo.getUserWidgetList()) {
				for (Contact contact : response.getContactList()) {
					contactServiceImp.removeJsonIssue(contact);

				}
			}

		}

	}

}
