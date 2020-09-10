package com.euclid.dealbook.bean;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.ContactTypeRepository;

@Repository
public class ContactTypeBeanImpl implements ContactTypeBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(ContactTypeBeanImpl.class);

	@Autowired
	private ContactTypeRepository contactTypeRepository;

	/**
	 * Method to Get ContactType List details.
	 * 
	 * @return Get ContactType List
	 */
	@Override
	public List<ContactType> getall() {
		LOGGER.debug("Getting List of all ContactType");
		return (List<ContactType>) contactTypeRepository.findAll();

	}

	/**
	 * Method to Get ContactType details.
	 * 
	 * @param ContactType Id
	 * @return ContactType
	 * @throws ApplicationException
	 */
	@Override
	public ContactType get(long contactTypeId) throws ApplicationException {
		try {
			LOGGER.debug("Get ContactType details of - " + contactTypeId + " Started");
			Optional<ContactType> contactTypeOptional = contactTypeRepository.findById(contactTypeId);
			if (!contactTypeOptional.isPresent()) {
				throw new ApplicationException("ContactType Not Found for Id " + contactTypeId);
			}
			ContactType contactTypeObj = contactTypeOptional.get();
			return contactTypeObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get ContactType using Name details.
	 * 
	 * @param ContactType Name
	 * @return ContactType
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactType> findByName(String name) throws ApplicationException {
		try {
			LOGGER.debug("Get ContactType details of - " + name + " Started");
			List<ContactType> contactTypeList = contactTypeRepository.findByName(name);
			if (contactTypeList.isEmpty()) {
				throw new ApplicationException("ContactType Not Found for Name " + name);
			}
			return contactTypeList;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}
}
