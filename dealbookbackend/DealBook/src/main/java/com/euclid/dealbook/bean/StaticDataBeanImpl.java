package com.euclid.dealbook.bean;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.dao.Country;
import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.vo.ContactStaticVo;
import com.euclid.dealbook.vo.CountryWithStates;
import com.euclid.dealbook.vo.UserWidgetResponse;

@Repository
public class StaticDataBeanImpl implements StaticDataBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(StaticDataBeanImpl.class);

	@Autowired
	private RoleBeanImpl roleBeanImpl;

	@Autowired
	private ContactOrgBeanImpl contactOrgBeanImpl;

	@Autowired
	private ContactTypeBeanImpl contactTypeBeanImpl;

	@Autowired
	private CountryBeanImpl countryBeanImpl;

	@Autowired
	private UserWidgetBeanImpl userWidgetBeanImpl;

	@Autowired
	private CriteriaEntityBeanImpl criteriaEntityBeanImpl;

	@Autowired
	private ContactBeanImpl contactBeanImpl;

	/**
	 * Method to Get Static Data.
	 * 
	 * @param Contact Id
	 * @return Static Data
	 * @throws ApplicationException
	 */
	@Override
	public ContactStaticVo getStatic(long contactId) throws ApplicationException {
		try {
			LOGGER.debug("Get Static Data for Contact ");

			ContactStaticVo contactStaticVo = new ContactStaticVo();
			/*
			 * Get RoleList and set to ContactStatic Data
			 */
			List<Role> roleList = roleBeanImpl.getall();
			contactStaticVo.setRoleList(roleList);
			/*
			 * Get ContactOrgList and set to ContactStatic Data
			 */
			List<ContactOrg> contactOrgList = contactOrgBeanImpl.getall();
			contactStaticVo.setContactOrgList(contactOrgList);
			/*
			 * Get ContactTypeList and set to ContactStatic Data
			 */
			List<ContactType> contactTypeList = contactTypeBeanImpl.getall();
			contactStaticVo.setContactTypeList(contactTypeList);
			/*
			 * Get CountryList and set to ContactStatic Data
			 */
			List<Country> countryList = countryBeanImpl.getall();
			contactStaticVo.setCountryList(countryList);
			/*
			 * Get CriteriaEntityList and set to ContactStatic Data
			 */
			List<CriteriaEntity> criteriaEntityList = criteriaEntityBeanImpl.getall();
			contactStaticVo.setCriteriaEntityList(criteriaEntityList);

			/*
			 * Get WidgetTypeList of Contact and set to ContactStatic Data
			 */
			Contact contact = contactBeanImpl.get(contactId);
			List<UserWidgetResponse> userWidgetList = userWidgetBeanImpl.getWidgetByContact(contact);
			contactStaticVo.setUserWidgetList(userWidgetList);
			/*
			 * Get CountryWithStates and set to ContactStatic Data
			 */
			List<CountryWithStates> countryWithStatesList = countryBeanImpl.getAllCountryWithState();
			contactStaticVo.setCountryWithStatesList(countryWithStatesList);

			return contactStaticVo;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

}
