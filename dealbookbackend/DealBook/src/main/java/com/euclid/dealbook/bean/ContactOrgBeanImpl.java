package com.euclid.dealbook.bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Address;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.ContactOrgRepository;
import com.euclid.dealbook.repository.ContactRepository;

@Repository
public class ContactOrgBeanImpl implements ContactOrgBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(ContactOrgBeanImpl.class);

	@Autowired
	private ContactOrgRepository contactOrgRepository;

	@Autowired
	private StateBeanImpl stateBeanImpl;

	@Autowired
	private ContactRepository contactRepository;

	/**
	 * Method to Getting List of all ContactOrganization.
	 * 
	 * @return List of all ContactOrganization
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactOrg> getall() throws ApplicationException {
		LOGGER.debug("Getting List of all ContactOrganization");
		List<ContactOrg> contactOrgList = contactOrgRepository.findAll();
		for (ContactOrg contactOrg : contactOrgList) {
			/*
			 * Set Location Details
			 */
			contactOrg.setLocation(getLocationDetails(contactOrg.getAddress()));

		}
		return contactOrgList;

	}

	/**
	 * Method to Get Location Details.
	 * 
	 * @param Address
	 * @return String
	 * @throws ApplicationException
	 */
	private String getLocationDetails(Address address) throws ApplicationException {
		try {
			if (null == address) {
				return null;
			}
			String location = "";
			List<String> list = new ArrayList<>();

			if (null != address.getLine() && address.getLine() != "" && !address.getLine().isEmpty()) {
				list.add(address.getLine());

			}
			if (null != address.getCity() && address.getCity() != "" && !address.getCity().isEmpty()) {
				list.add(address.getCity());

			}
			if (null != address.getState()) {

				if (null != address.getState().getName() && address.getState().getName() != ""
						&& !address.getState().getName().isEmpty()) {
					list.add(address.getState().getName());
					list.add(address.getState().getCountry().getName());

				}

			}
			location = list.stream().collect(Collectors.joining(","));
			if (location == "" || location.isEmpty() || location == null) {
				return null;
			}
			return location;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get ContactOrganization details.
	 * 
	 * @param ContactOrganization Id
	 * @return ContactOrganization
	 * @throws ApplicationException
	 */
	@Override
	public ContactOrg get(long contactOrgId) throws ApplicationException {
		try {
			LOGGER.debug("Get ContactOrganization details of - " + contactOrgId + " Started");
			Optional<ContactOrg> contactOrgOptional = contactOrgRepository.findById(contactOrgId);
			if (!contactOrgOptional.isPresent()) {
				throw new ApplicationException("Organization Not Found with Id " + contactOrgId);
			}
			ContactOrg contactOrgObj = contactOrgOptional.get();
			/*
			 * Set Location Details
			 */
			contactOrgObj.setLocation(getLocationDetails(contactOrgObj.getAddress()));
			return contactOrgObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get ContactOrganization using Name details.
	 * 
	 * @param ContactOrganization Name
	 * @return ContactOrganization
	 * @throws ApplicationException
	 */
	@Override
	public ContactOrg findByName(String name) throws ApplicationException {
		try {
			LOGGER.debug("Get ContactOrganization details of - " + name + " Started");
			List<ContactOrg> contactOrgList = contactOrgRepository.findByName(name);
			if (contactOrgList.isEmpty()) {
				throw new ApplicationException("Organization Not Found with Name " + name);
			}
			return contactOrgList.get(0);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Update ContactOrg details.
	 * 
	 * @param ContactOrg
	 * @return ContactOrg
	 * @throws ApplicationException
	 */
	@Override
	public ContactOrg save(ContactOrg contactOrg) throws ApplicationException {
		try {
			/*
			 * Get ContactOrg
			 */
			ContactOrg savedContactOrg = get(contactOrg.getId());
			/*
			 * Update ContactOrg Details
			 */
			updateContactOrgData(savedContactOrg, contactOrg);
			/*
			 * Get State and Set To Address
			 */
			if (null != contactOrg.getAddress() && null != contactOrg.getAddress().getState()
					&& null != contactOrg.getAddress().getState().getId()) {
				State stateObj = stateBeanImpl.get(contactOrg.getAddress().getState().getId());
				Address savedaddress = updateAddressData(savedContactOrg.getAddress(), contactOrg.getAddress());
				savedaddress.setState(stateObj);
				savedContactOrg.setAddress(savedaddress);
			}
			contactOrgRepository.save(savedContactOrg);
			return get(savedContactOrg.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	private Address updateAddressData(Address savedaddress, Address address) {
		if (null == address) {
			return null;
		}
		if (null == savedaddress) {
			savedaddress = new Address();
		}
		if (null != address.getCity()) {
			savedaddress.setCity(address.getCity());
		}
		if (null != address.getLine()) {
			savedaddress.setLine(address.getLine());
		}
		if (null != address.getZipCode()) {
			savedaddress.setZipCode(address.getZipCode());
		}
		return savedaddress;

	}

	private void updateContactOrgData(ContactOrg savedContactOrg, ContactOrg contactOrg) throws ApplicationException {
		if (null == savedContactOrg || null == contactOrg) {
			return;
		}
		if (null != contactOrg.getName()) {
			/*
			 * Check Organization Name Already Create
			 */
			List<ContactOrg> contactOrgList = contactOrgRepository.findByNameAndIdNotIn(contactOrg.getName(),
					contactOrg.getId());
			if (!contactOrgList.isEmpty()) {
				throw new ApplicationException("Organization With Name Already in System " + contactOrg.getName());
			}
			savedContactOrg.setName(contactOrg.getName());
		}
		if (null != contactOrg.getWebsite()) {
			savedContactOrg.setWebsite(contactOrg.getWebsite());
		}
		if (null != contactOrg.getLob()) {
			savedContactOrg.setLob(contactOrg.getLob());
		}
		if (null != contactOrg.getUpdatedBy()) {
			savedContactOrg.setUpdatedBy(contactOrg.getUpdatedBy());
		}
		if (null != contactOrg.getCreatedByName()) {
			savedContactOrg.setCreatedByName(contactOrg.getCreatedByName());
		}
		if (null != contactOrg.getUpdatedByName()) {
			savedContactOrg.setUpdatedByName(contactOrg.getUpdatedByName());
		}
		/*
		 * Set UpdateOn
		 */
		Date updateOn = new Date();
		savedContactOrg.setUpdatedOn(updateOn);

	}

	/**
	 * Method to Delete ContactOrg details.
	 * 
	 * @param ContactOrg Id
	 * @return void
	 * @throws ApplicationException
	 */
	@Override
	public void delete(long contactOrgId) throws ApplicationException {
		try {
			LOGGER.debug("Delete ContactOrg detials of - " + contactOrgId + " Started");
			ContactOrg contactOrgObj = get(contactOrgId);
			/*
			 * Check ContactOrganization has Contact
			 */
			List<Contact> contactList = contactRepository.findContactByContactOrg(contactOrgObj.getId());
			if (!contactList.isEmpty()) {
				throw new ApplicationException("Can Not Delete Contact Organization Which is have Contacts");
			}

			contactOrgRepository.deleteById(contactOrgId);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Create ContactOrg details.
	 * 
	 * @param ContactOrg
	 * @return ContactOrg
	 * @throws ApplicationException
	 */
	@Override
	public ContactOrg create(ContactOrg contactOrg) throws ApplicationException {
		try {
			/*
			 * Check ContactOrg Exits With Name
			 */
			List<ContactOrg> savedContactOrgList = contactOrgRepository.findByName(contactOrg.getName());
			if (!savedContactOrgList.isEmpty()) {
				throw new ApplicationException("Organization With Name Already in System " + contactOrg.getName());
			}
			/*
			 * Get State and Set To Address
			 */
			if (null != contactOrg.getAddress() && null != contactOrg.getAddress().getState()
					&& null != contactOrg.getAddress().getState().getId()) {
				State stateObj = stateBeanImpl.get(contactOrg.getAddress().getState().getId());
				contactOrg.getAddress().setState(stateObj);
			} else {
				contactOrg.setAddress(null);

			}

			/*
			 * Set CreatedOn
			 */
			Date createOn = new Date();
			contactOrg.setCreatedOn(createOn);

			contactOrgRepository.save(contactOrg);
			return get(contactOrg.getId());

		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

}
