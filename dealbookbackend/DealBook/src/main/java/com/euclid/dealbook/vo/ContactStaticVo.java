package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.dao.Country;
import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.dao.WidgetType;

public class ContactStaticVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private List<Role> roleList = new ArrayList<>();
	private List<ContactOrg> contactOrgList = new ArrayList<>();
	private List<ContactType> contactTypeList = new ArrayList<>();
	private List<Country> countryList = new ArrayList<>();
	private List<CriteriaEntity> criteriaEntityList = new ArrayList<>();

	private List<WidgetType> widgetTypeList = new ArrayList<>();
	List<UserWidgetResponse> userWidgetList = new ArrayList<>();

	List<CountryWithStates> countryWithStatesList = new ArrayList<>();

	/**
	 * @return the roleList
	 */
	public List<Role> getRoleList() {
		return roleList;
	}

	/**
	 * @param roleList the roleList to set
	 */
	public void setRoleList(List<Role> roleList) {
		this.roleList = roleList;
	}

	/**
	 * @return the contactOrgList
	 */
	public List<ContactOrg> getContactOrgList() {
		return contactOrgList;
	}

	/**
	 * @param contactOrgList the contactOrgList to set
	 */
	public void setContactOrgList(List<ContactOrg> contactOrgList) {
		this.contactOrgList = contactOrgList;
	}

	/**
	 * @return the contactTypeList
	 */
	public List<ContactType> getContactTypeList() {
		return contactTypeList;
	}

	/**
	 * @param contactTypeList the contactTypeList to set
	 */
	public void setContactTypeList(List<ContactType> contactTypeList) {
		this.contactTypeList = contactTypeList;
	}

	/**
	 * @return the countryList
	 */
	public List<Country> getCountryList() {
		return countryList;
	}

	/**
	 * @param countryList the countryList to set
	 */
	public void setCountryList(List<Country> countryList) {
		this.countryList = countryList;
	}

	/**
	 * @return the criteriaEntityList
	 */
	public List<CriteriaEntity> getCriteriaEntityList() {
		return criteriaEntityList;
	}

	/**
	 * @param criteriaEntityList the criteriaEntityList to set
	 */
	public void setCriteriaEntityList(List<CriteriaEntity> criteriaEntityList) {
		this.criteriaEntityList = criteriaEntityList;
	}

	/**
	 * @return the userWidgetList
	 */
	public List<UserWidgetResponse> getUserWidgetList() {
		return userWidgetList;
	}

	/**
	 * @param userWidgetList the userWidgetList to set
	 */
	public void setUserWidgetList(List<UserWidgetResponse> userWidgetList) {
		this.userWidgetList = userWidgetList;
	}

	/**
	 * @return the widgetTypeList
	 */
	public List<WidgetType> getWidgetTypeList() {
		return widgetTypeList;
	}

	/**
	 * @param widgetTypeList the widgetTypeList to set
	 */
	public void setWidgetTypeList(List<WidgetType> widgetTypeList) {
		this.widgetTypeList = widgetTypeList;
	}

	/**
	 * @return the countryWithStatesList
	 */
	public List<CountryWithStates> getCountryWithStatesList() {
		return countryWithStatesList;
	}

	/**
	 * @param countryWithStatesList the countryWithStatesList to set
	 */
	public void setCountryWithStatesList(List<CountryWithStates> countryWithStatesList) {
		this.countryWithStatesList = countryWithStatesList;
	}

}
