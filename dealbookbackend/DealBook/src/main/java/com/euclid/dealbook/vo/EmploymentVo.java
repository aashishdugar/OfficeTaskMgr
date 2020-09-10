package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.Date;

public class EmploymentVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private Date joinDate;
	private Date startDate;
	private Date endDate;
	private Boolean familyHealth;
	private Boolean selfHealth;
	private Boolean h1b;
	private Boolean gc;
	private Boolean clientManaged;
	private ConsultantVo consultant;

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
	 * @return the joinDate
	 */
	public Date getJoinDate() {
		return joinDate;
	}

	/**
	 * @param joinDate the joinDate to set
	 */
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}

	/**
	 * @return the startDate
	 */
	public Date getStartDate() {
		return startDate;
	}

	/**
	 * @param startDate the startDate to set
	 */
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	/**
	 * @return the endDate
	 */
	public Date getEndDate() {
		return endDate;
	}

	/**
	 * @param endDate the endDate to set
	 */
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	/**
	 * @return the familyHealth
	 */
	public Boolean getFamilyHealth() {
		return familyHealth;
	}

	/**
	 * @param familyHealth the familyHealth to set
	 */
	public void setFamilyHealth(Boolean familyHealth) {
		this.familyHealth = familyHealth;
	}

	/**
	 * @return the selfHealth
	 */
	public Boolean getSelfHealth() {
		return selfHealth;
	}

	/**
	 * @param selfHealth the selfHealth to set
	 */
	public void setSelfHealth(Boolean selfHealth) {
		this.selfHealth = selfHealth;
	}

	/**
	 * @return the h1b
	 */
	public Boolean getH1b() {
		return h1b;
	}

	/**
	 * @param h1b the h1b to set
	 */
	public void setH1b(Boolean h1b) {
		this.h1b = h1b;
	}

	/**
	 * @return the gc
	 */
	public Boolean getGc() {
		return gc;
	}

	/**
	 * @param gc the gc to set
	 */
	public void setGc(Boolean gc) {
		this.gc = gc;
	}

	/**
	 * @return the clientManaged
	 */
	public Boolean getClientManaged() {
		return clientManaged;
	}

	/**
	 * @param clientManaged the clientManaged to set
	 */
	public void setClientManaged(Boolean clientManaged) {
		this.clientManaged = clientManaged;
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

}
