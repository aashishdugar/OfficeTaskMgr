package com.euclid.dealbook.bean;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ActivityType;
import com.euclid.dealbook.dao.ActivityView;
import com.euclid.dealbook.dao.Address;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.dao.UserWidget;
import com.euclid.dealbook.dao.UserWidgetView;
import com.euclid.dealbook.dao.WidgetFilter;
import com.euclid.dealbook.dao.WidgetType;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.AddressRepository;
import com.euclid.dealbook.repository.UserWidgetRepository;
import com.euclid.dealbook.repository.UserWidgetViewRepository;
import com.euclid.dealbook.types.CriteriaEntityTypes;
import com.euclid.dealbook.types.FilterByTypes;
import com.euclid.dealbook.utils.UserWidgetComparater;
import com.euclid.dealbook.vo.UserWidgetResponse;

@Repository
public class UserWidgetBeanImpl implements UserWidgetBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserWidgetBeanImpl.class);

	@Autowired
	private UserWidgetRepository userWidgetRepository;

	@Autowired
	private WidgetTypeBeanImpl widgetTypeBeanImpl;

	@Autowired
	private ContactBeanImpl contactBeanImpl;

	@Autowired
	private UserWidgetViewRepository userWidgetViewRepository;

	@Autowired
	private CriteriaEntityBeanImpl criteriaEntityBeanImpl;

	@Autowired
	private ContactOrgBeanImpl contactOrgBeanImpl;

	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private ActivityTypeBeanImpl activityTypeBeanImpl;

	@PersistenceContext
	private EntityManager em;

	/**
	 * Method to Getting List of all UserWidget.
	 * 
	 * @return UserWidgetView
	 */
	@Override
	public List<UserWidgetView> getall() {
		LOGGER.debug("Getting List of all UserWidget");
		return userWidgetViewRepository.findAll();

	}

	/**
	 * Method to Get UserWidget Details.
	 * 
	 * @param UserWidget Id
	 * @return UserWidget
	 * @throws ApplicationException
	 */
	@Override
	public UserWidget get(long userWidgetId) throws ApplicationException {
		try {
			LOGGER.debug("Get UserWidget details of - " + userWidgetId + " Started");
			Optional<UserWidget> userWidgetOptional = userWidgetRepository.findById(userWidgetId);
			if (!userWidgetOptional.isPresent()) {
				throw new ApplicationException("UserWidget Not Found for Id " + userWidgetId);
			}
			return userWidgetOptional.get();
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Update UserWidget Details.
	 * 
	 * @param UserWidget
	 * @return void
	 * @throws ApplicationException
	 */
	@Override
	public void save(UserWidget userWidget) throws ApplicationException {
		try {
			/*
			 * Get UserWidget
			 */
			UserWidget savedUserWidget = get(userWidget.getId());
			/*
			 * Update UserWidget Data
			 */
			updateUserWidgetData(savedUserWidget, userWidget);

			/*
			 * Get WidgetType and Set to UserWidget
			 */
			if (null != userWidget.getType() && null != userWidget.getType().getId()) {
				WidgetType widgetTypeObj = widgetTypeBeanImpl.get(userWidget.getType().getId());
				savedUserWidget.setType(widgetTypeObj);
			}

			/*
			 * Get Contact and Set to UserWidget
			 */
			if (null != userWidget.getOwner() && null != userWidget.getOwner().getId()) {
				Contact contactObj = contactBeanImpl.get(userWidget.getOwner().getId());
				savedUserWidget.setOwner(contactObj);
			}
			/*
			 * Get CriteriaEntity and Set to UserWidget
			 */
			if (null != userWidget.getCriteriaEntity() && null != userWidget.getCriteriaEntity().getId()) {
				CriteriaEntity criteriaObj = criteriaEntityBeanImpl.get(userWidget.getCriteriaEntity().getId());
				savedUserWidget.setCriteriaEntity(criteriaObj);
			}

			userWidgetRepository.save(savedUserWidget);

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	private UserWidget updateUserWidgetData(UserWidget savedUserWidget, UserWidget userWidget) {
		if (null == userWidget) {
			return null;
		}
		if (null != userWidget.getTitle()) {
			savedUserWidget.setTitle(userWidget.getTitle());
		}
		if (null != userWidget.getQuery()) {
			savedUserWidget.setQuery(userWidget.getQuery());
		}
		if (null != userWidget.getPosRow()) {
			savedUserWidget.setPosRow(userWidget.getPosRow());
		}
		if (null != userWidget.getPosCol()) {
			savedUserWidget.setPosCol(userWidget.getPosCol());
		}
		if (null != userWidget.getSizex()) {
			savedUserWidget.setSizex(userWidget.getSizex());
		}
		if (null != userWidget.getSizey()) {
			savedUserWidget.setSizey(userWidget.getSizey());
		}
		if (null != userWidget.getIsStandard()) {
			savedUserWidget.setIsStandard(userWidget.getIsStandard());
		}

		return savedUserWidget;

	}

	/**
	 * Method to Delete UserWidget Details.
	 * 
	 * @param UserWidget Id
	 * @return void
	 * @throws ApplicationException
	 */
	@Override
	public void delete(long userWidgetId) throws ApplicationException {
		try {
			LOGGER.debug("Delete UserWidget detials of - " + userWidgetId + " Started");
			UserWidget userWidgetObj = get(userWidgetId);
			/*
			 * Cannot Delete Standard Widget
			 */
			if (userWidgetObj.getIsStandard()) {
				throw new ApplicationException("Standard Widget Cannot Delete");

			}
			userWidgetRepository.deleteById(userWidgetObj.getId());
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Create UserWidget Details.
	 * 
	 * @param UserWidget
	 * @return UserWidgetResponse
	 * @throws ApplicationException
	 */
	@Override
	public UserWidgetResponse create(UserWidget userWidget) throws ApplicationException {
		try {
			/*
			 * Get WidgetType and Set to UserWidget
			 */
			if (null != userWidget.getType() && null != userWidget.getType().getId()) {
				WidgetType widgetTypeObj = widgetTypeBeanImpl.get(userWidget.getType().getId());
				userWidget.setType(widgetTypeObj);
			} else {
				userWidget.setType(null);

			}

			/*
			 * Get Contact and Set to UserWidget
			 */
			if (null != userWidget.getOwner() && null != userWidget.getOwner().getId()) {
				Contact contactObj = contactBeanImpl.get(userWidget.getOwner().getId());
				userWidget.setOwner(contactObj);
			} else {
				userWidget.setOwner(null);

			}

			/*
			 * Get CriteriaEntity and Set to UserWidget
			 */
			if (null != userWidget.getCriteriaEntity() && null != userWidget.getCriteriaEntity().getId()) {
				CriteriaEntity criteriaObj = criteriaEntityBeanImpl.get(userWidget.getCriteriaEntity().getId());
				userWidget.setCriteriaEntity(criteriaObj);
			} else {
				userWidget.setCriteriaEntity(null);

			}

			/*
			 * Get FilterBy and Set to UserWidget
			 */
			if (null != userWidget.getWidgetFilterList() && !userWidget.getWidgetFilterList().isEmpty()) {
				for (WidgetFilter widgetFilter : userWidget.getWidgetFilterList()) {

					if (FilterByTypes.CREATEDATE.getValue().equalsIgnoreCase(widgetFilter.getName())
							|| FilterByTypes.LASTACTIVEDATE.getValue().equalsIgnoreCase(widgetFilter.getName())
							|| FilterByTypes.FOLLOWUPDATE.getValue().equalsIgnoreCase(widgetFilter.getName())
							|| FilterByTypes.CREATEDON.getValue().equalsIgnoreCase(widgetFilter.getName())) {
						isValidfilterValue(widgetFilter.getFilterValue());

					}
					widgetFilter.setUserWidget(userWidget);
				}

			} else {
				userWidget.setWidgetFilterList(null);

			}
			/*
			 * Set IsStandard False to UserWidget
			 */
			userWidget.setIsStandard(false);

			userWidgetRepository.save(userWidget);
			LOGGER.debug("save UserWidget successfully" + userWidget.getId());
			return getWidgetList(userWidget.getId(), userWidget.getOwner().getId());

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Check Valid Filter Value For Date.
	 * 
	 * @param FilterValue
	 * @return void
	 * @throws ApplicationException
	 */
	private void isValidfilterValue(String filterValue) throws ApplicationException {
		try {
			switch (filterValue) {
			case "Today":
				LOGGER.debug("Valid Filter Value " + filterValue);
				break;
			case "Yesterday":
				LOGGER.debug("Valid Filter Value " + filterValue);
				break;
			case "Last 2 Days":
				LOGGER.debug("Valid Filter Value " + filterValue);
				break;
			case "Last 5 Days":
				LOGGER.debug("Valid Filter Value " + filterValue);
				break;
			case "Last Week":
				LOGGER.debug("Valid Filter Value " + filterValue);
				break;

			default:
				throw new ApplicationException("Invalid FilterValue " + filterValue);
			}
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get Date of Given date Minus Days.
	 * 
	 * @param Days
	 * @return Date
	 */
	private Date getDate(int days) {
		final Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -days);
		cal.set(Calendar.HOUR_OF_DAY, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MINUTE, 0);
		return cal.getTime();
	}

	/**
	 * Method to Get Todays Date.
	 * 
	 * @return Date
	 */
	private Date getTodaysDate() {
		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.set(Calendar.SECOND, 0);
		calendar.set(Calendar.MINUTE, 0);
		return calendar.getTime();

	}

	/**
	 * Method to Get Widget By Contact.
	 * 
	 * @param Contact
	 * @return UserWidgetResponse List
	 * @throws ApplicationException
	 */
	@Override
	public List<UserWidgetResponse> getWidgetByContact(Contact contact) throws ApplicationException {
		try {

			List<UserWidgetResponse> widgetList = new ArrayList<>();
			/*
			 * Get UserWidget of Contact
			 */
			List<UserWidget> userWidgetList = userWidgetRepository.findByOwnerOrIsStandardOrderByIdDesc(contact, true);
			/*
			 * Sort List for to get standard Widget First in List
			 */
			Collections.sort(userWidgetList, new UserWidgetComparater(true));

			for (UserWidget userWidget : userWidgetList) {
				/*
				 * Get Data of UserWidget from Contact And Activities
				 */
				UserWidgetResponse userWidgetResponse = getWidgetList(userWidget.getId(), contact.getId());
				UserWidgetResponse response = new UserWidgetResponse();
				response.setIsStandard(userWidget.getIsStandard());
				response.setId(userWidget.getId());
				response.setCriteria(userWidget.getCriteriaEntity().getName());
				response.setTitle(userWidget.getTitle());
				response.setContactList(userWidgetResponse.getContactList());
				response.setActivityList(userWidgetResponse.getActivityList());
				widgetList.add(response);
			}

			return widgetList;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get WidgetList.
	 * 
	 * @param id
	 * @return UserWidgetResponse
	 * @throws ApplicationException
	 */
	@Override
	public UserWidgetResponse getWidgetList(long id, long contactId) throws ApplicationException {
		try {
			/*
			 * Get UserWidget
			 */

			UserWidget userWidget = get(id);
			/*
			 * Get Criterias
			 */
			UserWidgetResponse response = new UserWidgetResponse();
			String criterias = userWidget.getCriteriaEntity().getName();
			if (CriteriaEntityTypes.CONTACT.getValue().equalsIgnoreCase(criterias)) {
				LOGGER.debug("Enter into contact");

				/*
				 * Contact Repository Called
				 */
				List<Contact> contactList = getContactListByFiltter(userWidget);
				response.setContactList(contactList);

			} else {
				LOGGER.debug("Enter into Activity");

				/*
				 * Activity Repository Called
				 */
				response.setActivityList(getActivityListByFiltter(userWidget, contactId));

			}
			response.setId(id);
			response.setCriteria(userWidget.getCriteriaEntity().getName());
			response.setTitle(userWidget.getTitle());
			response.setIsStandard(userWidget.getIsStandard());

			return response;

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get ActivityList By Filter.
	 * 
	 * @param UserWidget ,Contact Id
	 * @return ActivityView List
	 * @throws ApplicationException
	 */
	private List<ActivityView> getActivityListByFiltter(UserWidget userWidget, long contactId)
			throws ApplicationException {
		try {
			/*
			 * Create Criteria With filter Value
			 */
			CriteriaBuilder cb = em.getCriteriaBuilder();
			CriteriaQuery<ActivityView> q = cb.createQuery(ActivityView.class);
			Root<ActivityView> root = q.from(ActivityView.class);
			q.select(root);
			Predicate typePredicate = null;
			Predicate followupPredicate = null;
			Predicate followupYesterDayPredicate = null;
			Predicate createdOnPredicate = null;
			Predicate createdOnYesterDayPredicate = null;
			Predicate updateByPredicate = null;
			Predicate standardPredicate = null;
			Predicate createdByPredicate = null;

			Predicate createdByupdateBy = null;

			for (WidgetFilter widgetFilter : userWidget.getWidgetFilterList()) {

				if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.ACTIVITYTYPE.getValue())) {
					String typeIds = widgetFilter.getFilterValue();
					String[] elements = typeIds.split(":::");
					List<String> fixedLenghtList = Arrays.asList(elements);
					List<ActivityType> typeList = new ArrayList<>();
					for (String type : fixedLenghtList) {
						long num = Long.parseLong(type);
						ActivityType activityType = activityTypeBeanImpl.get(num);
						typeList.add(activityType);

					}
					Path<Object> parentExpression = root.get("type");
					typePredicate = parentExpression.in(typeList);
				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.FOLLOWUPDATE.getValue())) {
					Date filterDate = getDateOfFilterValue(widgetFilter.getFilterValue());
					LOGGER.debug("Filter Date" + filterDate);
					if (widgetFilter.getFilterValue().equalsIgnoreCase("YesterDay")) {
						followupPredicate = cb.greaterThanOrEqualTo(root.get("followupDate").as(java.util.Date.class),
								filterDate);
						Date todaydate = getTodaysDate();
						LOGGER.debug("Today Date" + todaydate);

						followupYesterDayPredicate = cb
								.lessThanOrEqualTo(root.get("followupDate").as(java.util.Date.class), todaydate);
					} else {
						followupPredicate = cb.greaterThanOrEqualTo(root.get("followupDate").as(java.util.Date.class),
								filterDate);
					}

				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.CREATEDON.getValue())) {
					Date filterDate = getDateOfFilterValue(widgetFilter.getFilterValue());
					LOGGER.debug("Filter Date" + filterDate);

					if (widgetFilter.getFilterValue().equalsIgnoreCase("YesterDay")) {
						createdOnPredicate = cb.greaterThanOrEqualTo(root.get("createdOn").as(java.util.Date.class),
								filterDate);
						Date todaydate = getTodaysDate();
						LOGGER.debug("Today Date" + todaydate);
						createdOnYesterDayPredicate = cb
								.lessThanOrEqualTo(root.get("createdOn").as(java.util.Date.class), todaydate);
					} else {
						createdOnPredicate = cb.greaterThanOrEqualTo(root.get("createdOn").as(java.util.Date.class),
								filterDate);

						if (userWidget.getIsStandard()) {
							standardPredicate = cb.equal(root.get("createdBy"), contactId);

						}
					}

				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.UPDATEDBY.getValue())) {
					String updatedByIds = widgetFilter.getFilterValue();
					String[] elements = updatedByIds.split(":::");
					List<String> fixedLenghtList = Arrays.asList(elements);
					List<Long> updatedByList = new ArrayList<>();
					for (String contactOwner : fixedLenghtList) {
						long num = Long.parseLong(contactOwner);
						updatedByList.add(num);

					}
					Path<Object> parentUpdatedByExpression = root.get("updatedBy");
					updateByPredicate = parentUpdatedByExpression.in(updatedByList);

					Path<Object> parentCreatedByExpression = root.get("createdBy");
					createdByPredicate = parentCreatedByExpression.in(updatedByList);

					createdByupdateBy = cb.or(updateByPredicate, createdByPredicate);

				}

			}
			List<Predicate> p = new ArrayList<>();
			if (null != typePredicate) {
				p.add(typePredicate);
			}
			if (null != followupPredicate) {
				p.add(followupPredicate);
			}
			if (null != followupYesterDayPredicate) {
				p.add(followupYesterDayPredicate);
			}
			if (null != createdOnPredicate) {
				p.add(createdOnPredicate);
			}
			if (null != createdOnYesterDayPredicate) {
				p.add(createdOnYesterDayPredicate);
			}
			if (null != createdByupdateBy) {
				p.add(createdByupdateBy);
			}
			if (null != standardPredicate) {
				p.add(standardPredicate);
			}

			List<ActivityView> list = new ArrayList<>();
			if (p.size() != 0) {
				q.where(p.toArray(new Predicate[p.size()]));
				TypedQuery<ActivityView> query = em.createQuery(q);
				return query.getResultList();

			} else {
				return list;
			}

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Get ContactList By Filter.
	 * 
	 * @param UserWidget
	 * @return Contact List
	 * @throws ApplicationException
	 */
	private List<Contact> getContactListByFiltter(UserWidget userWidget) throws ApplicationException {
		try {
			/*
			 * Create Criteria With filter Value
			 */
			CriteriaBuilder cb = em.getCriteriaBuilder();
			CriteriaQuery<Contact> q = cb.createQuery(Contact.class);
			Root<Contact> root = q.from(Contact.class);
			q.select(root);
			Predicate orgPredicate = null;
			Predicate designationPredicate = null;
			Predicate locationPredicate = null;
			Predicate contactOwnerPredicate = null;
			Predicate reportingToPredicate = null;
			Predicate createDatePredicate = null;
			Predicate createDateYesterDayPredicate = null;
			Predicate updateDatePredicate = null;
			Predicate updateDateYesterDayPredicate = null;

			for (WidgetFilter widgetFilter : userWidget.getWidgetFilterList()) {

				if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.COMPANY.getValue())) {
					String companyIds = widgetFilter.getFilterValue();
					String[] elements = companyIds.split(":::");
					List<String> fixedLenghtList = Arrays.asList(elements);
					List<ContactOrg> contactOrgList = new ArrayList<>();
					for (String company : fixedLenghtList) {
						long num = Long.parseLong(company);
						ContactOrg contactOrg = contactOrgBeanImpl.get(num);
						contactOrgList.add(contactOrg);

					}
					Path<Object> parentExpression = root.get("contactorg");
					orgPredicate = parentExpression.in(contactOrgList);
				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.DESIGNATION.getValue())) {
					String filterValue = widgetFilter.getFilterValue();
					String[] elements = filterValue.split(":::");
					List<String> parentList = Arrays.asList(elements);
					Path<Object> parentExpression = root.get("designation");
					designationPredicate = parentExpression.in(parentList);
				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.LOCATION.getValue())) {
					String addressIds = widgetFilter.getFilterValue();
					String[] elements = addressIds.split(":::");
					List<String> fixedLenghtList = Arrays.asList(elements);
					List<Address> addressList = new ArrayList<>();
					for (String address : fixedLenghtList) {
						List<Address> addres = addressRepository.findByCity(address);
						for (Address addressData : addres) {
							addressList.add(addressData);

						}

					}
					Path<Object> parentExpression = root.get("address");
					if (!addressList.isEmpty()) {
						locationPredicate = parentExpression.in(addressList);

					}
				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.CONTACTOWNER.getValue())) {
					String ownerIds = widgetFilter.getFilterValue();
					String[] elements = ownerIds.split(":::");
					List<String> fixedLenghtList = Arrays.asList(elements);
					List<Contact> contactOwnerList = new ArrayList<>();
					for (String contactOwner : fixedLenghtList) {
						long num = Long.parseLong(contactOwner);
						Contact contact = contactBeanImpl.get(num);
						contactOwnerList.add(contact);

					}
					Path<Object> parentExpression = root.get("contactOwner");
					contactOwnerPredicate = parentExpression.in(contactOwnerList);
				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.REPORTTO.getValue())) {
					String reportingIds = widgetFilter.getFilterValue();
					String[] elements = reportingIds.split(":::");
					List<String> fixedLenghtList = Arrays.asList(elements);
					List<Contact> reportingList = new ArrayList<>();
					for (String contactOwner : fixedLenghtList) {
						long num = Long.parseLong(contactOwner);
						Contact contact = contactBeanImpl.get(num);
						reportingList.add(contact);

					}
					Path<Object> parentExpression = root.get("reportingto");
					reportingToPredicate = parentExpression.in(reportingList);
				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.CREATEDATE.getValue())) {
					Date filterDate = getDateOfFilterValue(widgetFilter.getFilterValue());
					LOGGER.debug("Filter Date" + filterDate);
					if (widgetFilter.getFilterValue().equalsIgnoreCase("YesterDay")) {
						createDatePredicate = cb.greaterThanOrEqualTo(root.get("createdOn").as(java.util.Date.class),
								filterDate);
						Date todaydate = getTodaysDate();
						LOGGER.debug("Today Date" + todaydate);
						createDateYesterDayPredicate = cb
								.lessThanOrEqualTo(root.get("createdOn").as(java.util.Date.class), todaydate);
					} else {
						createDatePredicate = cb.greaterThanOrEqualTo(root.get("createdOn").as(java.util.Date.class),
								filterDate);
					}

				} else if (widgetFilter.getName().equalsIgnoreCase(FilterByTypes.LASTACTIVEDATE.getValue())) {
					Date filterDate = getDateOfFilterValue(widgetFilter.getFilterValue());
					LOGGER.debug("Filter Date" + filterDate);
					if (widgetFilter.getFilterValue().equalsIgnoreCase("YesterDay")) {
						updateDatePredicate = cb.greaterThanOrEqualTo(root.get("updatedOn").as(java.util.Date.class),
								filterDate);
						Date todaydate = getTodaysDate();
						LOGGER.debug("Today Date" + todaydate);
						updateDateYesterDayPredicate = cb
								.lessThanOrEqualTo(root.get("updatedOn").as(java.util.Date.class), todaydate);
					} else {
						updateDatePredicate = cb.greaterThanOrEqualTo(root.get("updatedOn").as(java.util.Date.class),
								filterDate);
					}

				}

			}
			List<Predicate> p = new ArrayList<>();
			if (null != orgPredicate) {
				p.add(orgPredicate);
			}
			if (null != designationPredicate) {
				p.add(designationPredicate);
			}
			if (null != locationPredicate) {
				p.add(locationPredicate);
			}
			if (null != contactOwnerPredicate) {
				p.add(contactOwnerPredicate);
			}
			if (null != reportingToPredicate) {
				p.add(reportingToPredicate);
			}
			if (null != createDatePredicate) {
				p.add(createDatePredicate);
			}
			if (null != createDateYesterDayPredicate) {
				p.add(createDateYesterDayPredicate);
			}
			if (null != updateDatePredicate) {
				p.add(updateDatePredicate);
			}
			if (null != updateDateYesterDayPredicate) {
				p.add(updateDateYesterDayPredicate);
			}

			List<Contact> list = new ArrayList<>();
			if (p.size() != 0) {
				q.where(p.toArray(new Predicate[p.size()]));
				TypedQuery<Contact> query = em.createQuery(q);
				return query.getResultList();

			} else {
				return list;
			}

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

	/**
	 * Method to Get Date Of Filter Value.
	 * 
	 * @param FilterValue
	 * @return Date
	 * @throws ApplicationException
	 */
	private Date getDateOfFilterValue(String filterValue) throws ApplicationException {
		try {
			Date date = getTodaysDate();
			switch (filterValue) {
			case "Today":
				date = getTodaysDate();
				break;
			case "Yesterday":
				date = getDate(1);
				break;
			case "Last 2 Days":
				date = getDate(1);
				break;
			case "Last 5 Days":
				date = getDate(4);
				break;
			case "Last Week":
				date = getDate(7);
				break;

			default:
				throw new ApplicationException("Invalid FilterValue " + filterValue);
			}
			return date;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}

	}

}
