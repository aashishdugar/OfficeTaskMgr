package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.Date;

public class WorkhistoryVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String company;
	private String position;
	private String website;
	private Date startdDate;
	private Date endDate;
	private String summary;
	private String highlights;
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
	 * @return the company
	 */
	public String getCompany() {
		return company;
	}

	/**
	 * @param company the company to set
	 */
	public void setCompany(String company) {
		this.company = company;
	}

	/**
	 * @return the position
	 */
	public String getPosition() {
		return position;
	}

	/**
	 * @param position the position to set
	 */
	public void setPosition(String position) {
		this.position = position;
	}

	/**
	 * @return the website
	 */
	public String getWebsite() {
		return website;
	}

	/**
	 * @param website the website to set
	 */
	public void setWebsite(String website) {
		this.website = website;
	}

	/**
	 * @return the startdDate
	 */
	public Date getStartdDate() {
		return startdDate;
	}

	/**
	 * @param startdDate the startdDate to set
	 */
	public void setStartdDate(Date startdDate) {
		this.startdDate = startdDate;
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
	 * @return the summary
	 */
	public String getSummary() {
		return summary;
	}

	/**
	 * @param summary the summary to set
	 */
	public void setSummary(String summary) {
		this.summary = summary;
	}

	/**
	 * @return the highlights
	 */
	public String getHighlights() {
		return highlights;
	}

	/**
	 * @param highlights the highlights to set
	 */
	public void setHighlights(String highlights) {
		this.highlights = highlights;
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
