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

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.springframework.data.annotation.Transient;

import com.euclid.dealbook.types.DealbookTextType;

@Entity
@Table(name = "contact")
@TypeDef(name = "DealbookTextType", typeClass = DealbookTextType.class)
public class Contact implements Serializable {

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

	@Column(name = "description")
	private String description;

	@Column(name = "name")
	private String name;

	@Column(name = "designation")
	private String designation;

	@Column(name = "salutation")
	private String salutation;

	@Column(name = "blogurl")
	private String blogurl;

	@Column(name = "linkedin")
	private String linkedin;

	@Column(name = "twitter")
	private String twitter;

	@Column(name = "facebook")
	private String facebook;

	@Column(name = "dob")
	private Date dob;

	@Column(name = "isactive")
	private Boolean isActive;

	@Column(name = "isuser")
	private Boolean isUser;

	@Column(name = "createdby")
	private Long createdBy;

	@Column(name = "updatedby")
	private Long updatedBy;

	@Column(name = "password")
	@Type(type = "DealbookTextType")
	private String password;

	@Column(name = "token")
	private Integer token;

	@Transient
	private transient String location;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "role")
	private Role role;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address")
	private Address address;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "contactorg")
	private ContactOrg contactorg;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "reportingto")
	private Contact reportingto;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "contacttype")
	private ContactType contactType;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "contactowner")
	private Contact contactOwner;

	@OneToMany(mappedBy = "contact", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@OrderBy("updatedOn")
	private Set<Activity> activities = new HashSet<>();

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
	 * @return the contactorg
	 */
	public ContactOrg getContactorg() {
		return contactorg;
	}

	/**
	 * @param contactorg the contactorg to set
	 */
	public void setContactorg(ContactOrg contactorg) {
		this.contactorg = contactorg;
	}

	/**
	 * @return the reportingto
	 */
	public Contact getReportingto() {
		return reportingto;
	}

	/**
	 * @param reportingto the reportingto to set
	 */
	public void setReportingto(Contact reportingto) {
		this.reportingto = reportingto;
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

	public Set<Activity> getActivities() {
		return activities;
	}

	public void setActivities(Set<Activity> activities) {
		this.activities = activities;
	}

	/**
	 * @return the contactOwner
	 */
	public Contact getContactOwner() {
		return contactOwner;
	}

	/**
	 * @param contactOwner the contactOwner to set
	 */
	public void setContactOwner(Contact contactOwner) {
		this.contactOwner = contactOwner;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getToken() {
		return token;
	}

	public void setToken(Integer token) {
		this.token = token;
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

	@Override
	public String toString() {
		return "Contact [id=" + id + ", email=" + email + ", mobile=" + mobile + ", name=" + name + ", salutation="
				+ salutation + ", isUser=" + isUser + ", address=" + address + ", contactorg=" + contactorg
				+ ", reportingto=" + reportingto + ", contactOwner=" + contactOwner + "]";
	}

	private String trim(String s) {
		if (null == s || s.isEmpty()) {
			return s;
		}
		return s.trim();
	}

	public void trim() {
		this.email = trim(this.email);
		this.mobile = trim(this.mobile);
		this.name = trim(this.name);
		this.designation = trim(this.designation);
		this.salutation = trim(this.salutation);
		if (null != this.reportingto)
			this.reportingto.email = trim(this.reportingto.email);
		if (null != this.contactOwner)
			this.contactOwner.email = trim(this.contactOwner.email);

	}

}
