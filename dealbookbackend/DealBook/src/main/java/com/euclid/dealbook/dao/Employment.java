package com.euclid.dealbook.dao;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employment")
public class Employment implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "joindate")
	private Date joinDate;

	@Column(name = "startdate")
	private Date startDate;

	@Column(name = "enddate")
	private Date endDate;

	@Column(name = "familyhealth")
	private Boolean familyHealth;

	@Column(name = "selfhealth")
	private Boolean selfHealth;

	@Column(name = "h1b")
	private Boolean h1b;

	@Column(name = "gc")
	private Boolean gc;

	@Column(name = "clientmanaged")
	private Boolean clientManaged;

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

}
