package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.Date;

public class DealVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String details;
	private Double billRate;
	private Double discountPercent;
	private Double workingHours;
	private String priority;
	private Date postedDate;
	private String description;
	private String openings;
	private Integer location;
	private Integer createdBy;
	private Integer modifiedBy;
	private Date createdDate;
	private Date modifiedDate;
	private ConsultantVo consultant;
	private ContactVo owner;

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
	 * @return the details
	 */
	public String getDetails() {
		return details;
	}

	/**
	 * @param details the details to set
	 */
	public void setDetails(String details) {
		this.details = details;
	}

	/**
	 * @return the billRate
	 */
	public Double getBillRate() {
		return billRate;
	}

	/**
	 * @param billRate the billRate to set
	 */
	public void setBillRate(Double billRate) {
		this.billRate = billRate;
	}

	/**
	 * @return the discountPercent
	 */
	public Double getDiscountPercent() {
		return discountPercent;
	}

	/**
	 * @param discountPercent the discountPercent to set
	 */
	public void setDiscountPercent(Double discountPercent) {
		this.discountPercent = discountPercent;
	}

	/**
	 * @return the workingHours
	 */
	public Double getWorkingHours() {
		return workingHours;
	}

	/**
	 * @param workingHours the workingHours to set
	 */
	public void setWorkingHours(Double workingHours) {
		this.workingHours = workingHours;
	}

	/**
	 * @return the priority
	 */
	public String getPriority() {
		return priority;
	}

	/**
	 * @param priority the priority to set
	 */
	public void setPriority(String priority) {
		this.priority = priority;
	}

	/**
	 * @return the postedDate
	 */
	public Date getPostedDate() {
		return postedDate;
	}

	/**
	 * @param postedDate the postedDate to set
	 */
	public void setPostedDate(Date postedDate) {
		this.postedDate = postedDate;
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
	 * @return the openings
	 */
	public String getOpenings() {
		return openings;
	}

	/**
	 * @param openings the openings to set
	 */
	public void setOpenings(String openings) {
		this.openings = openings;
	}

	/**
	 * @return the location
	 */
	public Integer getLocation() {
		return location;
	}

	/**
	 * @param location the location to set
	 */
	public void setLocation(Integer location) {
		this.location = location;
	}

	/**
	 * @return the createdBy
	 */
	public Integer getCreatedBy() {
		return createdBy;
	}

	/**
	 * @param createdBy the createdBy to set
	 */
	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}

	/**
	 * @return the modifiedBy
	 */
	public Integer getModifiedBy() {
		return modifiedBy;
	}

	/**
	 * @param modifiedBy the modifiedBy to set
	 */
	public void setModifiedBy(Integer modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	/**
	 * @return the createdDate
	 */
	public Date getCreatedDate() {
		return createdDate;
	}

	/**
	 * @param createdDate the createdDate to set
	 */
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	/**
	 * @return the modifiedDate
	 */
	public Date getModifiedDate() {
		return modifiedDate;
	}

	/**
	 * @param modifiedDate the modifiedDate to set
	 */
	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	/**
	 * @return the consultant
	 */
	public ConsultantVo getConsultant() {
		return consultant;
	}

	/**
	 * @param consultant the consultant to set
	 */
	public void setConsultant(ConsultantVo consultant) {
		this.consultant = consultant;
	}

	/**
	 * @return the owner
	 */
	public ContactVo getOwner() {
		return owner;
	}

	/**
	 * @param owner the owner to set
	 */
	public void setOwner(ContactVo owner) {
		this.owner = owner;
	}

}
