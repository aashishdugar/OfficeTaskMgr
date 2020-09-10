package com.euclid.dealbook.bean;

import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ActivityView;
import com.euclid.dealbook.dao.Address;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.dao.ContactView;
import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.dao.UserWidget;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.ActivityRepository;
import com.euclid.dealbook.repository.ContactDetailsViewRepository;
import com.euclid.dealbook.repository.ContactRepository;
import com.euclid.dealbook.repository.ContactViewRepository;
import com.euclid.dealbook.repository.UserWidgetRepository;
import com.euclid.dealbook.types.ActivityTypes;
import com.euclid.dealbook.vo.ContactChildHierachyVo;
import com.euclid.dealbook.vo.ContactHierachyVo;

@Repository
public class ContactBeanImpl implements ContactBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(ContactBeanImpl.class);

	@Autowired
	private ContactRepository contactRepository;

	@Autowired
	private RoleBeanImpl roleBeanImpl;

	@Autowired
	private ContactOrgBeanImpl contactOrgBeanImpl;

	@Autowired
	private ContactTypeBeanImpl contactTypeBeanImpl;

	@Autowired
	private StateBeanImpl stateBeanImpl;

	@Autowired
	private ContactViewRepository contactViewRepository;

	@Autowired
	private ActivityRepository activityRepository;

	@Autowired
	private ContactDetailsViewRepository contactDetailsViewRepository;

	@Autowired
	private UserWidgetRepository userWidgetRepository;

	/**
	 * Method to find ContactList.
	 * 
	 * @return ContactViewList
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactView> getall() throws ApplicationException {
		try {
			LOGGER.debug("Getting List of all contacts");
			List<ContactView> list = contactViewRepository.findAllByOrderByCreatedOnDesc();
			for (ContactView contactView : list) {
				/*
				 * Set Location Details
				 */
				contactView.setLocation(getLocationDetails(contactView.getAddress()));
				/*
				 * Set ActivityTypes Count
				 */
				Long call = 0l;
				Long email = 0l;
				Long meeting = 0l;
				Long text = 0l;

				for (ActivityView activityView : contactView.getActivities()) {
					String type = activityView.getType().getName();
					if (type.equalsIgnoreCase(ActivityTypes.CALL.getValue())) {
						call++;
					} else if (type.equalsIgnoreCase(ActivityTypes.EMAIL.getValue())) {
						email++;
					} else if (type.equalsIgnoreCase(ActivityTypes.MEETING.getValue())) {
						meeting++;
					} else if (type.equalsIgnoreCase(ActivityTypes.TEXT.getValue())) {
						text++;
					}
				}
				contactView.setCallCount(call);
				contactView.setEmailCount(email);
				contactView.setMeetingCount(meeting);
				contactView.setTextCount(text);
			}

			return list;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

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
	 * Method to Get Contact details.
	 * 
	 * @param Contact Id
	 * @return Contact
	 * @throws ApplicationException
	 */
	@Override
	public Contact get(long contactId) throws ApplicationException {
		try {
			LOGGER.debug("Get Contact details of - " + contactId + " Started");
			Optional<Contact> contactOptional = contactRepository.findById(contactId);
			if (!contactOptional.isPresent()) {
				throw new ApplicationException("Contact Not Found for Id " + contactId);
			}
			Contact contact = contactOptional.get();
			/*
			 * Set Location Details
			 */
			contact.setLocation(getLocationDetails(contact.getAddress()));
			return contact;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Update Contact details.
	 * 
	 * @param Contact
	 * @return Contact
	 * @throws ApplicationException
	 */
	@Override
	public Contact save(Contact contact) throws ApplicationException {
		try {
			/*
			 * Get Contact
			 */
			Contact savedContact = get(contact.getId());
			/*
			 * Update Contact Details
			 */
			updateContactData(savedContact, contact);

			/*
			 * Get Role and Set to Contact
			 */
			if (null != contact.getRole() && null != contact.getRole().getId()) {
				Role roleObj = roleBeanImpl.get(contact.getRole().getId());
				savedContact.setRole(roleObj);
			}

			/*
			 * Get ContactOrg and Set to Contact
			 */
			if (null != contact.getContactorg() && null != contact.getContactorg().getId()) {
				ContactOrg contactOrgObj = contactOrgBeanImpl.get(contact.getContactorg().getId());
				savedContact.setContactorg(contactOrgObj);
			}
			/*
			 * Get ContactType and Set to Contact
			 */
			if (null != contact.getContactType() && null != contact.getContactType().getId()) {
				ContactType contactTypeObj = contactTypeBeanImpl.get(contact.getContactType().getId());
				savedContact.setContactType(contactTypeObj);
			}

			/*
			 * Get State and Set To Address
			 */
			if (null != contact.getAddress() && null != contact.getAddress().getState()
					&& null != contact.getAddress().getState().getId()) {
				State stateObj = stateBeanImpl.get(contact.getAddress().getState().getId());
				Address savedaddress = updateAddressData(savedContact.getAddress(), contact.getAddress());
				savedaddress.setState(stateObj);
				savedContact.setAddress(savedaddress);
			}
			/*
			 * Get Reportingto and Set to Contact
			 */
			if (null != contact.getReportingto() && null != contact.getReportingto().getId()) {
				Contact reportingToObj = get(contact.getReportingto().getId());
				savedContact.setReportingto(reportingToObj);
			}
			/*
			 * Get ContactOwner and Set to Contact
			 */
			if (null != contact.getContactOwner() && null != contact.getContactOwner().getId()) {
				Contact contactOwnerObj = get(contact.getContactOwner().getId());
				savedContact.setContactOwner(contactOwnerObj);
			}

			contactRepository.save(savedContact);
			return get(savedContact.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	@Override
	public List<Contact> saveAll(List<Contact> contactList) throws ApplicationException {

		if (contactList == null || contactList.isEmpty()) {
			throw new ApplicationException("List should contain at least one contact imformation");
		}
		return contactRepository.saveAll(contactList);
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

	private void updateContactData(Contact savedContact, Contact contact) throws ApplicationException {
		if (null == savedContact || null == contact) {
			return;
		}
		if (null != contact.getEmail()) {
			/*
			 * Check email Already assign to another contact
			 */
			List<Contact> savedContactList = contactRepository.findByEmailAndIdNotIn(contact.getEmail(),
					contact.getId());
			if (!savedContactList.isEmpty()) {
				throw new ApplicationException("Contact With Email Already in System " + contact.getEmail());
			}
			savedContact.setEmail(contact.getEmail());
		}
		if (null != contact.getMobile()) {
			savedContact.setMobile(contact.getMobile());
		}
		if (null != contact.getDescription()) {
			savedContact.setDescription(contact.getDescription());
		}
		if (null != contact.getName()) {
			savedContact.setName(contact.getName());
		}
		if (null != contact.getDesignation()) {
			savedContact.setDesignation(contact.getDesignation());
		}
		if (null != contact.getSalutation()) {
			savedContact.setSalutation(contact.getSalutation());
		}
		if (null != contact.getBlogurl()) {
			savedContact.setBlogurl(contact.getBlogurl());
		}
		if (null != contact.getLinkedin()) {
			savedContact.setLinkedin(contact.getLinkedin());
		}
		if (null != contact.getTwitter()) {
			savedContact.setTwitter(contact.getTwitter());
		}
		if (null != contact.getFacebook()) {
			savedContact.setFacebook(contact.getFacebook());
		}
		if (null != contact.getDob()) {
			savedContact.setDob(contact.getDob());
		}
		if (null != contact.getIsActive()) {
			savedContact.setIsActive(contact.getIsActive());
		}
		if (null != contact.getIsUser()) {
			savedContact.setIsUser(contact.getIsUser());
		}
		if (null != contact.getCreatedBy()) {
			savedContact.setCreatedBy(contact.getCreatedBy());
		}
		if (null != contact.getUpdatedBy()) {
			savedContact.setUpdatedBy(contact.getUpdatedBy());
		}
		if (null != contact.getPassword()) {
			savedContact.setPassword(contact.getPassword());
		}
		if (null != contact.getToken()) {
			savedContact.setToken(contact.getToken());
		}
		/*
		 * Set UpdateOn
		 */
		Date updateOn = new Date();
		savedContact.setUpdatedOn(updateOn);

	}

	/**
	 * Method to Delete Contact details.
	 * 
	 * @param Contact Id
	 * @return void
	 * @throws ApplicationException
	 */
	@Override
	public void delete(long contactId) throws ApplicationException {
		try {
			LOGGER.debug("Delete Contact detials of - " + contactId + " Started");
			Contact contactObj = get(contactId);
			/*
			 * Check contact is Reporting to anyOther
			 */
			List<Contact> reportingToList = contactRepository.findByreportingto(contactObj);
			if (!reportingToList.isEmpty()) {
				throw new ApplicationException("Can Not Delete Contact Which is Reporting to Another Contacts");
			}
			/*
			 * Check contact is ContactOwner to anyOther
			 */
			List<Contact> contactOwnerList = contactRepository.findBycontactOwner(contactObj);
			if (!contactOwnerList.isEmpty()) {
				throw new ApplicationException("Can Not Delete Contact Which is ContactOwner to Another Contacts");
			}

			/*
			 * Check contact Has UserWidget
			 */
			List<UserWidget> userWidgetList = userWidgetRepository.findByOwnerOrderByIdDesc(contactObj);
			if (!userWidgetList.isEmpty()) {
				throw new ApplicationException("Can Not Delete Contact Which Have Widget");
			}

			contactRepository.deleteById(contactId);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Create Contact details.
	 * 
	 * @param Contact
	 * @return Contact
	 * @throws ApplicationException
	 */
	@Override
	public Contact create(Contact contact) throws ApplicationException {
		try {
			/*
			 * Check Contact Exits With Email Id
			 */
			List<Contact> savedContactList = contactRepository.findByEmail(contact.getEmail());
			if (!savedContactList.isEmpty()) {
				throw new ApplicationException("Contact With Email Already in System " + contact.getEmail());
			}
			/*
			 * Get Role and Set to Contact
			 */
			if (null != contact.getRole() && null != contact.getRole().getId()) {
				Role roleObj = roleBeanImpl.get(contact.getRole().getId());
				contact.setRole(roleObj);
			} else {
				contact.setRole(null);

			}
			/*
			 * Get ContactOrg and Set to Contact
			 */
			if (null != contact.getContactorg() && null != contact.getContactorg().getId()) {
				ContactOrg contactOrgObj = contactOrgBeanImpl.get(contact.getContactorg().getId());
				contact.setContactorg(contactOrgObj);
			} else {
				contact.setContactorg(null);

			}
			/*
			 * Get ContactType and Set to Contact
			 */
			if (null != contact.getContactType() && null != contact.getContactType().getId()) {
				ContactType contactTypeObj = contactTypeBeanImpl.get(contact.getContactType().getId());
				contact.setContactType(contactTypeObj);
			} else {
				contact.setContactType(null);

			}
			/*
			 * Get State and Set To Address
			 */
			if (null != contact.getAddress() && null != contact.getAddress().getState()
					&& null != contact.getAddress().getState().getId()) {
				State stateObj = stateBeanImpl.get(contact.getAddress().getState().getId());
				contact.getAddress().setState(stateObj);
			} else {
				contact.setAddress(null);

			}

			/*
			 * Get Reportingto and Set to Contact
			 */
			if (null != contact.getReportingto() && null != contact.getReportingto().getId()) {
				Contact reportingToObj = get(contact.getReportingto().getId());
				contact.setReportingto(reportingToObj);
			} else {
				contact.setReportingto(null);

			}
			/*
			 * Get ContactOwner and Set to Contact
			 */
			if (null != contact.getContactOwner() && null != contact.getContactOwner().getId()) {
				Contact contactOwnerObj = get(contact.getContactOwner().getId());
				contact.setContactOwner(contactOwnerObj);
			} else {
				contact.setContactOwner(null);

			}
			/*
			 * Set CreatedOn
			 */
			Date createOn = new Date();
			contact.setCreatedOn(createOn);

			return contactRepository.save(contact);
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Create Multiple Contact details.
	 * 
	 * @param ContactList
	 * @return ContactList
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactView> createBulkContacts(List<Contact> contactList) throws ApplicationException {
		try {
			List<Contact> savedContactList = new ArrayList<>();
			for (Contact contact : contactList) {

				/*
				 * Check Contact Exits With Email Id
				 */
				List<Contact> dbContactList = contactRepository.findByEmail(contact.getEmail());
				if (!dbContactList.isEmpty()) {
					throw new ApplicationException("Contact With Email Already in System " + contact.getEmail());
				}
				/*
				 * Get Role and Set to Contact
				 */
				if (null != contact.getRole() && null != contact.getRole().getId()) {
					Role roleObj = roleBeanImpl.get(contact.getRole().getId());
					contact.setRole(roleObj);
				} else {
					contact.setRole(null);

				}

				/*
				 * Get ContactOrg and Set to Contact
				 */
				if (null != contact.getContactorg() && null != contact.getContactorg().getId()) {
					ContactOrg contactOrgObj = contactOrgBeanImpl.get(contact.getContactorg().getId());
					contact.setContactorg(contactOrgObj);
				} else {
					contact.setContactorg(null);

				}

				/*
				 * Get ContactType and Set to Contact
				 */
				if (null != contact.getContactType() && null != contact.getContactType().getId()) {
					ContactType contactTypeObj = contactTypeBeanImpl.get(contact.getContactType().getId());
					contact.setContactType(contactTypeObj);
				} else {
					contact.setContactType(null);

				}

				/*
				 * Get State and Set To Address
				 */
				if (null != contact.getAddress() && null != contact.getAddress().getState()
						&& null != contact.getAddress().getState().getId()) {
					State stateObj = stateBeanImpl.get(contact.getAddress().getState().getId());
					contact.getAddress().setState(stateObj);
				} else {
					contact.setAddress(null);

				}

				/*
				 * Get Reportingto and Set to Contact
				 */
				if (null != contact.getReportingto() && null != contact.getReportingto().getId()) {
					Contact reportingToObj = get(contact.getReportingto().getId());
					contact.setReportingto(reportingToObj);
				} else {
					contact.setReportingto(null);

				}
				/*
				 * Get ContactOwner and Set to Contact
				 */
				if (null != contact.getContactOwner() && null != contact.getContactOwner().getId()) {
					Contact contactOwnerObj = get(contact.getContactOwner().getId());
					contact.setContactOwner(contactOwnerObj);
				} else {
					contact.setContactOwner(null);

				}

				/*
				 * Set CreatedOn
				 */
				Date createOn = new Date();
				contact.setCreatedOn(createOn);
				savedContactList.add(contact);

			}
			contactRepository.saveAll(savedContactList);
			return getall();
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Find Contact details with Email.
	 * 
	 * @param email
	 * @return ContactList
	 * @throws ApplicationException
	 */
	@Override
	public List<Contact> findByEmail(String email) throws ApplicationException {
		try {
			LOGGER.debug("Get Contact details of - " + email + " Started");
			List<Contact> contactList = contactRepository.findByEmail(email);
			if (contactList.isEmpty()) {
				throw new ApplicationException("Contact Not Found for Email " + email);
			}
			return contactList;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get All Distinct Designation.
	 * 
	 * @return Distinct Designation List
	 * @throws ApplicationException
	 */
	@Override
	public List<String> findDistinctDesignation() throws ApplicationException {
		try {
			LOGGER.debug("Get All Distinct Designation");
			List<String> distinctDesignation = contactRepository.findDistinctDesignation();
			/*
			 * Remove Empty Designation
			 */
			distinctDesignation.remove("");
			return distinctDesignation;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method Get All ContactOwner of Euclid Innovations.
	 * 
	 * @return Get All ContactOwner of Euclid Innovations
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactDetailsView> findAllContactOwner() throws ApplicationException {
		try {
			LOGGER.debug("Get All ContactOwner");
			return contactRepository.findAllContactOwner("Euclid Innovations");
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method Get All ReportingTo.
	 * 
	 * @return Get All ReportingTo
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactDetailsView> findAllReportingTo() throws ApplicationException {
		try {
			LOGGER.debug("Get All ReportingTo");
			return contactRepository.findAllReportingTo();

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to find contact based on email and token.
	 * 
	 * @param email
	 * @param token
	 * @return Contact
	 * @throws ApplicationException
	 */
	@Override
	public Contact getContact(String email, Integer token) throws ApplicationException {

		LOGGER.debug("Trying to find contact for email {0} having token {1}", email, token);

		String message = MessageFormat.format("Contact not found for email {0} having token {1}", email,
				String.valueOf(token));

		Optional<Contact> optionalContact = contactRepository.findByEmailAndToken(email, token);
		return optionalContact.orElseThrow(() -> new ApplicationException(message));
	}

	/**
	 * Method to Get contactList based on Contact Id List.
	 * 
	 * @param Contact Id List
	 * @return ContactList
	 * @throws ApplicationException
	 */
	@Override
	public List<ContactDetailsView> getContactsByGivenId(List<Long> contactIdList) throws ApplicationException {
		try {
			LOGGER.debug("Get ContactList of Given Ids");
			return contactDetailsViewRepository.findByIdIn(contactIdList);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get contactList based on Contact Name.
	 * 
	 * @param Contact Name
	 * @return ContactList
	 * @throws ApplicationException
	 */
	@Override
	public List<Contact> findByName(String name) throws ApplicationException {
		try {
			LOGGER.debug("Get Contact details of - " + name + " Started");
			return contactRepository.findByName(name);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get contactList based on Contact Name And Email.
	 * 
	 * @param Contact Name,Email
	 * @return ContactList
	 * @throws ApplicationException
	 */
	@Override
	public List<Contact> findByNameAndEmail(String name, String email) throws ApplicationException {
		try {
			LOGGER.debug("Get Contact details of - " + name + "And Email " + email + " Started");
			return contactRepository.findByNameAndEmail(name, email);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get contactList based on Contact Email.
	 * 
	 * @param Contact Email
	 * @return ContactList
	 * @throws ApplicationException
	 */
	@Override
	public List<Contact> findByEmailNoError(String email) throws ApplicationException {
		LOGGER.debug("Get Contact details of - " + email + " Started");
		if (null == email || email.isEmpty()) {
			return new ArrayList<>();
		}
		email = email.toLowerCase().trim();
		return contactRepository.findByEmail(email);

	}

	/**
	 * Method to Get contact Hierarchy.
	 * 
	 * @param Contact Id
	 * @return ContactHierachy
	 * @throws ApplicationException
	 */
	@Override
	public ContactHierachyVo getParentHierachy(long contactId) throws ApplicationException {
		try {
			/*
			 * Get Contact
			 */
			Contact contactObj = get(contactId);
			List<Contact> childContactList = new ArrayList<>();
			ContactHierachyVo contactHierachyVo = new ContactHierachyVo();
			if (null != contactObj.getReportingto() && null != contactObj.getReportingto().getId()) {
				Contact parentContact = contactObj.getReportingto();

				contactHierachyVo.setName(parentContact.getName());
				contactHierachyVo.setTitle(parentContact.getDesignation());
				contactHierachyVo.setId(parentContact.getId());
				/*
				 * Get Activity Count for Top Contact
				 */

				getActivityCountForTopContact(parentContact, contactHierachyVo);
				childContactList = contactRepository.findByreportingto(parentContact);

			} else {
				contactHierachyVo.setName(contactObj.getName());
				contactHierachyVo.setTitle(contactObj.getDesignation());
				contactHierachyVo.setId(contactObj.getId());
				/*
				 * Get Activity Count for Top Contact
				 */

				getActivityCountForTopContact(contactObj, contactHierachyVo);
				childContactList = contactRepository.findByreportingto(contactObj);

			}

			List<ContactChildHierachyVo> mainchildList = new ArrayList<>();

			List<ContactChildHierachyVo> childList = new ArrayList<>();

			for (Contact childContact : childContactList) {
				ContactChildHierachyVo contactChildHierachyVo = new ContactChildHierachyVo();
				contactChildHierachyVo.setName(childContact.getName());
				contactChildHierachyVo.setId(childContact.getId());
				contactChildHierachyVo.setTitle(childContact.getDesignation());
				contactChildHierachyVo.setParentContactId(childContact.getReportingto().getId());

				getActivityCountForChildContact(childContact, contactChildHierachyVo);

				mainchildList.add(contactChildHierachyVo);
				contactChildHierachyVo.setChildren(childList);
				getOnlyChildHearchy(contactChildHierachyVo, childContact);

			}
			contactHierachyVo.setChildren(mainchildList);
			return contactHierachyVo;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get Activity Count For Top Contact.
	 * 
	 * @param Contact and ContactHierachyVo
	 * @return void
	 */
	private void getActivityCountForTopContact(Contact contact, ContactHierachyVo contactHierachyVo) {
		int parentCallCount = 0;
		int parentEmailCount = 0;
		int parentMeetingCount = 0;
		int parentTextCount = 0;

		if (!contact.getActivities().isEmpty()) {

			parentCallCount = activityRepository.countByActivityTypeAndContact(ActivityTypes.CALL.getValue(),
					contact.getId());
			parentEmailCount = activityRepository.countByActivityTypeAndContact(ActivityTypes.EMAIL.getValue(),
					contact.getId());
			parentMeetingCount = activityRepository.countByActivityTypeAndContact(ActivityTypes.MEETING.getValue(),
					contact.getId());
			parentTextCount = activityRepository.countByActivityTypeAndContact(ActivityTypes.TEXT.getValue(),
					contact.getId());

		}
		contactHierachyVo.setCallCount(parentCallCount);
		contactHierachyVo.setEmailCount(parentEmailCount);
		contactHierachyVo.setMeetingCount(parentMeetingCount);
		contactHierachyVo.setTextCount(parentTextCount);

	}

	/**
	 * Method to Get ChildHearchy.
	 * 
	 * @param ContactChildHierachyVo and Contact
	 * @return void
	 */
	private ContactChildHierachyVo getOnlyChildHearchy(ContactChildHierachyVo contactChildHierachy, Contact contact) {
		ContactChildHierachyVo contactChildHierachyVo = new ContactChildHierachyVo();
		contactChildHierachyVo.setName(contact.getName());
		contactChildHierachyVo.setId(contact.getId());
		contactChildHierachyVo.setTitle(contact.getDesignation());
		List<Contact> childContactList = contactRepository.findByreportingto(contact);
		List<ContactChildHierachyVo> childList = new ArrayList<>();

		for (Contact childContact : childContactList) {
			ContactChildHierachyVo subChildHierachyVo = new ContactChildHierachyVo();
			subChildHierachyVo.setName(childContact.getName());
			subChildHierachyVo.setId(childContact.getId());
			subChildHierachyVo.setTitle(childContact.getDesignation());
			subChildHierachyVo.setParentContactId(childContact.getReportingto().getId());
			/*
			 * Get Activity Count for Child Contact
			 */
			getActivityCountForChildContact(childContact, subChildHierachyVo);

			childList.add(subChildHierachyVo);
			contactChildHierachyVo.setChildren(childList);
			contactChildHierachy.setChildren(childList);

		}

		return contactChildHierachyVo;

	}

	/**
	 * Method to Get Activity Count For Child Contact.
	 * 
	 * @param ContactChildHierachyVo and Contact
	 * @return void
	 */
	private void getActivityCountForChildContact(Contact childContact, ContactChildHierachyVo contactChildHierachyVo) {
		int childCallCount = 0;
		int childEmailCount = 0;
		int childMeetingCount = 0;
		int childTextCount = 0;

		if (!childContact.getActivities().isEmpty()) {

			childCallCount = activityRepository.countByActivityTypeAndContact(ActivityTypes.CALL.getValue(),
					childContact.getId());
			childEmailCount = activityRepository.countByActivityTypeAndContact(ActivityTypes.EMAIL.getValue(),
					childContact.getId());
			childMeetingCount = activityRepository.countByActivityTypeAndContact(ActivityTypes.MEETING.getValue(),
					childContact.getId());
			childTextCount = activityRepository.countByActivityTypeAndContact(ActivityTypes.TEXT.getValue(),
					childContact.getId());

		}
		contactChildHierachyVo.setCallCount(childCallCount);
		contactChildHierachyVo.setEmailCount(childEmailCount);
		contactChildHierachyVo.setMeetingCount(childMeetingCount);
		contactChildHierachyVo.setTextCount(childTextCount);

	}

}
