package com.euclid.dealbook.bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.ActivityType;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.excel.ImpActivity;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.ContactRepository;

@Repository
public class ImportBeanImpl implements ImportBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(ImportBeanImpl.class);

	@Autowired
	private RoleBeanImpl roleBeanImpl;

	@Autowired
	private ContactBeanImpl contactBeanImpl;

	@Autowired
	private ContactOrgBeanImpl contactOrgBeanImpl;

	@Autowired
	private ContactTypeBeanImpl contactTypeBeanImpl;

	@Autowired
	private StateBeanImpl stateBeanImpl;

	@Autowired
	private ActivityBean activityBean;

	@Autowired
	private ActivityTypeBean activityTypeBean;
	@Autowired
	ContactRepository contactRepository;

	/**
	 * Method to Import Contacts.
	 * 
	 * @param Contact List
	 * @return Contact List
	 * @throws ApplicationException
	 */
	@Override
	public List<Contact> importContacts(List<Contact> contacts) throws ApplicationException {
		try {
			List<Contact> contactsToSave = new ArrayList<>();
			int i = 1;
			for (Contact contact : contacts) {
				if (null != contact.getDescription() && contact.getDescription().equalsIgnoreCase("PROCESSED")) {
					continue;
				}
				List<Contact> existingContact = contactBeanImpl.findByEmailNoError(contact.getEmail());
				if (!existingContact.isEmpty() && existingContact.size() > 0) {
					LOGGER.debug("Contact Email " + contact.getEmail() + " Exist in System, Ignoring it");
					continue;
				}
				LOGGER.debug("Wroking on " + i++);
				LOGGER.debug("Wroking on " + contact);
				/*
				 * Get Role and Set to Contact
				 */
				if (Objects.nonNull(contact.getRole()) && !StringUtils.isEmpty(contact.getRole().getName())) {

					String roleName = contact.getRole().getName();
					List<Role> roles = roleBeanImpl.findByName(roleName);
					Role roleObj = roles.get(0);
					contact.setRole(roleObj);
				}
				/*
				 * Get ContactOrg and Set to Contact
				 */

				String orgName = contact.getContactorg().getName();
				ContactOrg contactOrgObj = contactOrgBeanImpl.findByName(orgName);
				contact.setContactorg(contactOrgObj);
				/*
				 * Get ContactType and Set to Contact
				 */
				if (Objects.nonNull(contact.getContactType())
						&& !StringUtils.isEmpty(contact.getContactType().getName())) {

					String contactType = contact.getContactType().getName();
					List<ContactType> contactTypes = contactTypeBeanImpl.findByName(contactType);
					ContactType contactTypeObj = contactTypes.get(0);
					contact.setContactType(contactTypeObj);
				}
				/*
				 * Get State and Set To Address
				 */
				if (null != contact.getAddress() && null != contact.getAddress().getState()
						&& null != contact.getAddress().getState().getName()) {

					String state = contact.getAddress().getState().getName();
					State stateObj = stateBeanImpl.findByName(state);
					contact.getAddress().setState(stateObj);
				}

				/*
				 * Get Reportingto and Set to Contact
				 */
				if (null != contact.getReportingto() && null != contact.getReportingto().getEmail()) {
					LOGGER.debug("Reporting Too Email " + contact.getReportingto().getEmail());
					List<Contact> reportingTo = contactBeanImpl.findByEmailNoError(contact.getReportingto().getEmail());
					if (reportingTo.isEmpty()) {

						Contact con = createContact(contact.getReportingto().getEmail(), contacts, contactsToSave);
						if (null == con) {
							throw new ApplicationException("Reporting Manager with email id "
									+ contact.getReportingto().getEmail() + " Not Present");
						}
						contact.setReportingto(con);
						contactsToSave.add(contact);
					} else {
						contact.setReportingto(reportingTo.get(0));
					}
				} else {
					contact.setReportingto(null);
				}
				/*
				 * Set Contact Owner
				 */
				if (null != contact.getContactOwner() && null != contact.getContactOwner().getEmail()) {
					LOGGER.debug("ContactOwner Email " + contact.getContactOwner().getEmail());

					List<Contact> contactOwner = contactBeanImpl
							.findByEmailNoError(contact.getContactOwner().getEmail());

					if (!contactOwner.isEmpty()) {
						contact.setContactOwner(contactOwner.get(0));
					} else {
						contact.setContactOwner(null);
					}
				} else {
					contact.setContactOwner(null);
				}
				/*
				 * Set CreatedOn
				 */
				Date createOn = new Date();

				contact.setCreatedOn(createOn);
				contactBeanImpl.create(contact);
				contactsToSave.add(contact);
			}
			return contactBeanImpl.saveAll(contactsToSave);
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Create Contact.
	 * 
	 * @param Email, Contact List
	 * @return Contact
	 * @throws ApplicationException
	 */
	private Contact createContact(String emailid, List<Contact> contacts, List<Contact> contactsToSave)
			throws ApplicationException {
		if (null == emailid || emailid.isEmpty()) {
			return null;
		}
		LOGGER.debug("Finding Reporting Mgr:" + emailid);
		for (int i = 0; i < contacts.size(); i++) {
			Contact contact = contacts.get(i);
			if (!contact.getEmail().trim().equalsIgnoreCase(emailid.trim())) {
				continue;
			}
			LOGGER.debug("Wroking on " + contact);
			/*
			 * Get Role and Set to Contact
			 */
			if (Objects.nonNull(contact.getRole()) && !StringUtils.isEmpty(contact.getRole().getName())) {

				String roleName = contact.getRole().getName();
				List<Role> roles = roleBeanImpl.findByName(roleName);
				Role roleObj = roles.get(0);
				contact.setRole(roleObj);
			}
			/*
			 * Get ContactOrg and Set to Contact
			 */

			String orgName = contact.getContactorg().getName();
			ContactOrg contactOrgObj = contactOrgBeanImpl.findByName(orgName);
			contact.setContactorg(contactOrgObj);
			/*
			 * Get ContactType and Set to Contact
			 */
			if (Objects.nonNull(contact.getContactType()) && !StringUtils.isEmpty(contact.getContactType().getName())) {

				String contactType = contact.getContactType().getName();
				List<ContactType> contactTypes = contactTypeBeanImpl.findByName(contactType);
				ContactType contactTypeObj = contactTypes.get(0);
				contact.setContactType(contactTypeObj);
			}
			/*
			 * Get State and Set To Addreess
			 */
			if (null != contact.getAddress() && null != contact.getAddress().getState()
					&& null != contact.getAddress().getState().getName()) {

				String state = contact.getAddress().getState().getName();
				State stateObj = stateBeanImpl.findByName(state);
				contact.getAddress().setState(stateObj);
			}

			/*
			 * Get Reportingto and Set to Contact
			 */
			if (null != contact.getReportingto() && null != contact.getReportingto().getEmail()) {
				LOGGER.debug("Reporting Too Email " + contact.getReportingto().getEmail());
				List<Contact> reportingTo = contactBeanImpl.findByEmailNoError(contact.getReportingto().getEmail());
				if (reportingTo.isEmpty()) {

					Contact con = createContact(contact.getReportingto().getEmail(), contacts, contactsToSave);
					if (null == con) {
						throw new ApplicationException("Reporting Manager with email id "
								+ contact.getReportingto().getEmail() + " Not Present");
					}
					contact.setReportingto(con);
					contactsToSave.add(contact);
				} else {
					contact.setReportingto(reportingTo.get(0));
				}
			} else {
				contact.setReportingto(null);
			}
			/*
			 * Set Contact Owner
			 */
			if (null != contact.getContactOwner() && null != contact.getContactOwner().getEmail()) {
				LOGGER.debug("ContactOwner Email " + contact.getContactOwner().getEmail());

				List<Contact> contactOwner = contactBeanImpl.findByEmailNoError(contact.getContactOwner().getEmail());

				if (!contactOwner.isEmpty()) {
					contact.setContactOwner(contactOwner.get(0));
				} else {
					contact.setContactOwner(null);
				}
			} else {
				contact.setContactOwner(null);
			}
			/*
			 * Set CreatedOn
			 */
			Date createOn = new Date();

			contact.setCreatedOn(createOn);
			contactBeanImpl.create(contact);
			contact.setDescription("PROCESSED");
			return contact;
		}
		return null;
	}

	/**
	 * Method to Import Activity.
	 * 
	 * @param Activity List
	 * @return Activity List
	 * @throws ApplicationException
	 */
	@Override
	public List<Activity> importActivities(List<ImpActivity> activityList) throws ApplicationException {
		try {
			if (activityList.isEmpty()) {
				throw new ApplicationException("Activity list is empty");
			}
			List<Activity> activities = new LinkedList<>();
			for (ImpActivity impActivity : activityList) {
				activities.add(createActivity(impActivity));

			}

			return activityBean.saveAll(activities);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());

		}
	}

	/**
	 * Method to Create Activity.
	 * 
	 * @param ImpActivity
	 * @return Activity
	 * @throws ApplicationException
	 */
	private Activity createActivity(ImpActivity impActivity) throws ApplicationException {

		try {
			Activity activity = new Activity();
			activity.setSubject(impActivity.getActivityName());
			activity.setNote(impActivity.getComments());
			activity.setFollowupDate(impActivity.getFollowUpDate());
			activity.setCreatedOn(impActivity.getCreatedDate());
			activity.setUpdatedOn(impActivity.getUpdatedDate());
			activity.setIsActive(impActivity.getIsActive());
			activity.setIsPrivate(impActivity.getIsPrivate());
			activity.setParent(null);
			/*
			 * If FollowUpDate is null then IsFollowup false else true
			 */
			if (null == impActivity.getFollowUpDate()) {
				activity.setIsFollowup(false);
			} else {
				activity.setIsFollowup(true);

			}
			/*
			 * Get Contact and Set To Activity
			 */
			if (null != impActivity.getContactName() && null != impActivity.getContactEmail()) {
				List<Contact> contactList = contactRepository.findByEmailName(impActivity.getContactName(),
						impActivity.getContactEmail());
				if (contactList.isEmpty()) {
					throw new ApplicationException("Contact Not Found For Name " + impActivity.getContactName()
							+ " And Email " + impActivity.getContactEmail());

				}
				activity.setContact(contactList.get(0));

			} else {
				activity.setContact(null);
			}

			/*
			 * Get ActivityType and Set To Activity
			 */
			if (null != impActivity.getActivityType() && !impActivity.getActivityType().isEmpty()) {
				ActivityType activityType = activityTypeBean.findByName(impActivity.getActivityType());
				activity.setType(activityType);
			} else {
				activity.setType(null);

			}

			/*
			 * Get CreatedBy and CreatedByName and Set To Activity
			 */
			if (null != impActivity.getCreatedBy() && !impActivity.getCreatedBy().trim().isEmpty()) {
				LOGGER.debug("Get CreatedBy and CreatedByName and Set To Activity");
				List<Contact> createdBy = contactBeanImpl.findByEmail(impActivity.getCreatedBy());
				Contact createdByContact = createdBy.get(0);
				activity.setCreatedBy(createdByContact.getId());
				activity.setCreatedByName(createdByContact.getName());
			}

			/*
			 * Get UpdatedBy and UpdatedByName and Set To Activity
			 */
			if (null != impActivity.getUpdatedBy() && !impActivity.getUpdatedBy().trim().isEmpty()) {
				LOGGER.debug("Get UpdatedBy and UpdatedByName and Set To Activity");
				List<Contact> updatedBy = contactBeanImpl.findByEmail(impActivity.getUpdatedBy());
				Contact updatedByContact = updatedBy.get(0);
				activity.setUpdatedBy(updatedByContact.getId());
				activity.setUpdatedByName(updatedByContact.getName());
			}

			return activity;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}
}
