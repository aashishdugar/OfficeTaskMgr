package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.Date;

public class ActivityVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String subject;
	private String note;
	private Date createdOn;
	private Date updatedOn;
	private Boolean isActive;
	private Boolean isPrivate;
	private ContactVo createdBy;
	private ContactVo updatedBy;
	private ActivityVo parent;
	private ActivityTypeVo type;

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
	 * @return the subject
	 */
	public String getSubject() {
		return subject;
	}

	/**
	 * @param subject the subject to set
	 */
	public void setSubject(String subject) {
		this.subject = subject;
	}

	/**
	 * @return the note
	 */
	public String getNote() {
		return note;
	}

	/**
	 * @param note the note to set
	 */
	public void setNote(String note) {
		this.note = note;
	}

	/**
	 * @return the createdOn
	 */
	public Date getCreatedOn() {
		return createdOn;
	}

	/**
	 * @param createdOn the createdOn to set
	 */
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	/**
	 * @return the updatedOn
	 */
	public Date getUpdatedOn() {
		return updatedOn;
	}

	/**
	 * @param updatedOn the updatedOn to set
	 */
	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	/**
	 * @return the isActive
	 */
	public Boolean getIsActive() {
		return isActive;
	}

	/**
	 * @param isActive the isActive to set
	 */
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	/**
	 * @return the isPrivate
	 */
	public Boolean getIsPrivate() {
		return isPrivate;
	}

	/**
	 * @param isPrivate the isPrivate to set
	 */
	public void setIsPrivate(Boolean isPrivate) {
		this.isPrivate = isPrivate;
	}

	/**
	 * @return the createdBy
	 */
	public ContactVo getCreatedBy() {
		return createdBy;
	}

	/**
	 * @param createdBy the createdBy to set
	 */
	public void setCreatedBy(ContactVo createdBy) {
		this.createdBy = createdBy;
	}

	/**
	 * @return the updatedBy
	 */
	public ContactVo getUpdatedBy() {
		return updatedBy;
	}

	/**
	 * @param updatedBy the updatedBy to set
	 */
	public void setUpdatedBy(ContactVo updatedBy) {
		this.updatedBy = updatedBy;
	}

	/**
	 * @return the parent
	 */
	public ActivityVo getParent() {
		return parent;
	}

	/**
	 * @param parent the parent to set
	 */
	public void setParent(ActivityVo parent) {
		this.parent = parent;
	}

	/**
	 * @return the type
	 */
	public ActivityTypeVo getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(ActivityTypeVo type) {
		this.type = type;
	}

}
