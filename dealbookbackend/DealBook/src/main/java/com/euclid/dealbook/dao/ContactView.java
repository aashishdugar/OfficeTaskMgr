package com.euclid.dealbook.dao;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import org.springframework.data.annotation.Transient;

@Entity
@Table(name = "contact")
public class ContactView implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "email")
	private String email;

	@Column(name = "mobile")
	private String mobile;

	@Column(name = "createdon")
	private Date createdOn;

	@Column(name = "updatedon")
	private Date updatedOn;

	@Column(name = "name")
	private String name;

	@Column(name = "designation")
	private String designation;

	@Column(name = "salutation")
	private String salutation;

	@Column(name = "isuser")
	private Boolean isUser;

	@Transient
	private transient Long callCount;

	@Transient
	private transient Long emailCount;

	@Transient
	private transient Long meetingCount;

	@Transient
	private transient Long textCount;

	@Transient
	private transient String location;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "role")
	private Role role;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address")
	private Address address;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "contacttype")
	private ContactType contactType;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "contactorg")
	private ContactOrgView contactOrg;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "reportingto")
	private ContactDetailsView reportingto;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "contactowner")
	private ContactDetailsView contactOwner;

	@OneToMany(mappedBy = "contact", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@OrderBy("updatedOn")
	private Set<ActivityView> activities = new HashSet<>();

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
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the mobile
	 */
	public String getMobile() {
		return mobile;
	}

	/**
	 * @param mobile the mobile to set
	 */
	public void setMobile(String mobile) {
		this.mobile = mobile;
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
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the designation
	 */
	public String getDesignation() {
		return designation;
	}

	/**
	 * @param designation the designation to set
	 */
	public void setDesignation(String designation) {
		this.designation = designation;
	}

	/**
	 * @return the contactOrg
	 */
	public ContactOrgView getContactOrg() {
		return contactOrg;
	}

	/**
	 * @param contactOrg the contactOrg to set
	 */
	public void setContactOrg(ContactOrgView contactOrg) {
		this.contactOrg = contactOrg;
	}

	/**
	 * @return the reportingto
	 */
	public ContactDetailsView getReportingto() {
		return reportingto;
	}

	/**
	 * @param reportingto the reportingto to set
	 */
	public void setReportingto(ContactDetailsView reportingto) {
		this.reportingto = reportingto;
	}

	/**
	 * @return the contactOwner
	 */
	public ContactDetailsView getContactOwner() {
		return contactOwner;
	}

	/**
	 * @param contactOwner the contactOwner to set
	 */
	public void setContactOwner(ContactDetailsView contactOwner) {
		this.contactOwner = contactOwner;
	}

	/**
	 * @return the activities
	 */
	public Set<ActivityView> getActivities() {
		return activities;
	}

	/**
	 * @param activities the activities to set
	 */
	public void setActivities(Set<ActivityView> activities) {
		this.activities = activities;
	}

	/**
	 * @return the role
	 */
	public Role getRole() {
		return role;
	}

	/**
	 * @param role the role to set
	 */
	public void setRole(Role role) {
		this.role = role;
	}

	/**
	 * @return the address
	 */
	public Address getAddress() {
		return address;
	}

	/**
	 * @param address the address to set
	 */
	public void setAddress(Address address) {
		this.address = address;
	}

	/**
	 * @return the salutation
	 */
	public String getSalutation() {
		return salutation;
	}

	/**
	 * @param salutation the salutation to set
	 */
	public void setSalutation(String salutation) {
		this.salutation = salutation;
	}

	/**
	 * @return the contactType
	 */
	public ContactType getContactType() {
		return contactType;
	}

	/**
	 * @param contactType the contactType to set
	 */
	public void setContactType(ContactType contactType) {
		this.contactType = contactType;
	}

	/**
	 * @return the isUser
	 */
	public Boolean getIsUser() {
		return isUser;
	}

	/**
	 * @param isUser the isUser to set
	 */
	public void setIsUser(Boolean isUser) {
		this.isUser = isUser;
	}

	/**
	 * @return the callCount
	 */
	public Long getCallCount() {
		return callCount;
	}

	/**
	 * @param callCount the callCount to set
	 */
	public void setCallCount(Long callCount) {
		this.callCount = callCount;
	}

	/**
	 * @return the emailCount
	 */
	public Long getEmailCount() {
		return emailCount;
	}

	/**
	 * @param emailCount the emailCount to set
	 */
	public void setEmailCount(Long emailCount) {
		this.emailCount = emailCount;
	}

	/**
	 * @return the meetingCount
	 */
	public Long getMeetingCount() {
		return meetingCount;
	}

	/**
	 * @param meetingCount the meetingCount to set
	 */
	public void setMeetingCount(Long meetingCount) {
		this.meetingCount = meetingCount;
	}

	/**
	 * @return the textCount
	 */
	public Long getTextCount() {
		return textCount;
	}

	/**
	 * @param textCount the textCount to set
	 */
	public void setTextCount(Long textCount) {
		this.textCount = textCount;
	}

	/**
	 * @return the location
	 */
	public String getLocation() {
		return location;
	}

	/**
	 * @param location the location to set
	 */
	public void setLocation(String location) {
		this.location = location;
	}

}
