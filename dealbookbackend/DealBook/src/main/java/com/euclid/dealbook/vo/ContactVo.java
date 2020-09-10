package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.Date;

public class ContactVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String email;
	private String mobile;
	private Date createdOn;
	private Date updatedOn;
	private String description;
	private String name;
	private String designation;
	private String salutation;
	private String blogurl;
	private String linkedin;
	private String twitter;
	private String facebook;
	private Date dob;
	private Boolean isActive;
	private Boolean isUser;
	private RoleVo role;
	private AddressVo address;
	private ContactOrgVo contactorg;
	private ContactVo reportingto;
	private ContactTypeVo contacttype;

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
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
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
	 * @return the blogurl
	 */
	public String getBlogurl() {
		return blogurl;
	}

	/**
	 * @param blogurl the blogurl to set
	 */
	public void setBlogurl(String blogurl) {
		this.blogurl = blogurl;
	}

	/**
	 * @return the linkedin
	 */
	public String getLinkedin() {
		return linkedin;
	}

	/**
	 * @param linkedin the linkedin to set
	 */
	public void setLinkedin(String linkedin) {
		this.linkedin = linkedin;
	}

	/**
	 * @return the twitter
	 */
	public String getTwitter() {
		return twitter;
	}

	/**
	 * @param twitter the twitter to set
	 */
	public void setTwitter(String twitter) {
		this.twitter = twitter;
	}

	/**
	 * @return the facebook
	 */
	public String getFacebook() {
		return facebook;
	}

	/**
	 * @param facebook the facebook to set
	 */
	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}

	/**
	 * @return the dob
	 */
	public Date getDob() {
		return dob;
	}

	/**
	 * @param dob the dob to set
	 */
	public void setDob(Date dob) {
		this.dob = dob;
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
	 * @return the role
	 */
	public RoleVo getRole() {
		return role;
	}

	/**
	 * @param role the role to set
	 */
	public void setRole(RoleVo role) {
		this.role = role;
	}

	/**
	 * @return the address
	 */
	public AddressVo getAddress() {
		return address;
	}

	/**
	 * @param address the address to set
	 */
	public void setAddress(AddressVo address) {
		this.address = address;
	}

	/**
	 * @return the contactorg
	 */
	public ContactOrgVo getContactorg() {
		return contactorg;
	}

	/**
	 * @param contactorg the contactorg to set
	 */
	public void setContactorg(ContactOrgVo contactorg) {
		this.contactorg = contactorg;
	}

	/**
	 * @return the reportingto
	 */
	public ContactVo getReportingto() {
		return reportingto;
	}

	/**
	 * @param reportingto the reportingto to set
	 */
	public void setReportingto(ContactVo reportingto) {
		this.reportingto = reportingto;
	}

	/**
	 * @return the contacttype
	 */
	public ContactTypeVo getContacttype() {
		return contacttype;
	}

	/**
	 * @param contacttype the contacttype to set
	 */
	public void setContacttype(ContactTypeVo contacttype) {
		this.contacttype = contacttype;
	}

}
