package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.euclid.dealbook.dao.ActivityView;
import com.euclid.dealbook.dao.Contact;

public class UserWidgetResponse implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String title;
	private String criteria;
	private Boolean isStandard;
	private List<Contact> contactList = new ArrayList<>();
	private List<ActivityView> activityList = new ArrayList<>();

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the criteria
	 */
	public String getCriteria() {
		return criteria;
	}

	/**
	 * @param criteria the criteria to set
	 */
	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}

	/**
	 * @return the contactList
	 */
	public List<Contact> getContactList() {
		return contactList;
	}

	/**
	 * @param contactList the contactList to set
	 */
	public void setContactList(List<Contact> contactList) {
		this.contactList = contactList;
	}

	/**
	 * @return the activityList
	 */
	public List<ActivityView> getActivityList() {
		return activityList;
	}

	/**
	 * @param activityList the activityList to set
	 */
	public void setActivityList(List<ActivityView> activityList) {
		this.activityList = activityList;
	}

	/**
	 * @return the isStandard
	 */
	public Boolean getIsStandard() {
		return isStandard;
	}

	/**
	 * @param isStandard the isStandard to set
	 */
	public void setIsStandard(Boolean isStandard) {
		this.isStandard = isStandard;
	}

}
