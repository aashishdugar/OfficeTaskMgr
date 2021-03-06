package com.euclid.dealbook.vo;

import java.io.Serializable;

public class ReferenceVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String reference;
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
	 * @return the reference
	 */
	public String getReference() {
		return reference;
	}

	/**
	 * @param reference the reference to set
	 */
	public void setReference(String reference) {
		this.reference = reference;
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
