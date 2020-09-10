package com.euclid.dealbook.dao;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "activity")
public class Activity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "subject")
	private String subject;

	@Column(name = "note")
	private String note;

	@Column(name = "created_on")
	private Date createdOn;

	@Column(name = "updated_on")
	private Date updatedOn;

	@Column(name = "isactive")
	private Boolean isActive;

	@Column(name = "isprivate")
	private Boolean isPrivate;

	@Column(name = "isfollowup")
	private Boolean isFollowup;

	@Column(name = "followupdate")
	private Date followupDate;

	@Column(name = "createdby")
	private Long createdBy;

	@Column(name = "createdbyname")
	private String createdByName;

	@Column(name = "updatedby")
	private Long updatedBy;

	@Column(name = "updatedbyname")
	private String updatedByName;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "parent")
	private Activity parent;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "type")
	private ActivityType type;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "contact")
	private Contact contact;

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
	 * @return the isFollowup
	 */
	public Boolean getIsFollowup() {
		return isFollowup;
	}

	/**
	 * @param isFollowup the isFollowup to set
	 */
	public void setIsFollowup(Boolean isFollowup) {
		this.isFollowup = isFollowup;
	}

	/**
	 * @return the followupDate
	 */
	public Date getFollowupDate() {
		return followupDate;
	}

	/**
	 * @param followupDate the followupDate to set
	 */
	public void setFollowupDate(Date followupDate) {
		this.followupDate = followupDate;
	}

	/**
	 * @return the createdBy
	 */
	public Long getCreatedBy() {
		return createdBy;
	}

	/**
	 * @param createdBy the createdBy to set
	 */
	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}

	/**
	 * @return the createdByName
	 */
	public String getCreatedByName() {
		return createdByName;
	}

	/**
	 * @param createdByName the createdByName to set
	 */
	public void setCreatedByName(String createdByName) {
		this.createdByName = createdByName;
	}

	/**
	 * @return the updatedBy
	 */
	public Long getUpdatedBy() {
		return updatedBy;
	}

	/**
	 * @param updatedBy the updatedBy to set
	 */
	public void setUpdatedBy(Long updatedBy) {
		this.updatedBy = updatedBy;
	}

	/**
	 * @return the updatedByName
	 */
	public String getUpdatedByName() {
		return updatedByName;
	}

	/**
	 * @param updatedByName the updatedByName to set
	 */
	public void setUpdatedByName(String updatedByName) {
		this.updatedByName = updatedByName;
	}

	/**
	 * @return the parent
	 */
	public Activity getParent() {
		return parent;
	}

	/**
	 * @param parent the parent to set
	 */
	public void setParent(Activity parent) {
		this.parent = parent;
	}

	/**
	 * @return the type
	 */
	public ActivityType getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(ActivityType type) {
		this.type = type;
	}

	/**
	 * @return the contact
	 */
	public Contact getContact() {
		return contact;
	}

	/**
	 * @param contact the contact to set
	 */
	public void setContact(Contact contact) {
		this.contact = contact;
	}

}
