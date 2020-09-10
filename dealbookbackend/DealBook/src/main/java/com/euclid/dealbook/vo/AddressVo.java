package com.euclid.dealbook.vo;

import java.io.Serializable;

public class AddressVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String line;
	private String city;
	private String zipCode;
	private StateVo state;

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
	 * @return the line
	 */
	public String getLine() {
		return line;
	}

	/**
	 * @param line the line to set
	 */
	public void setLine(String line) {
		this.line = line;
	}

	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}

	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}

	/**
	 * @return the zipCode
	 */
	public String getZipCode() {
		return zipCode;
	}

	/**
	 * @param zipCode the zipCode to set
	 */
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	/**
	 * @return the state
	 */
	public StateVo getState() {
		return state;
	}

	/**
	 * @param state the state to set
	 */
	public void setState(StateVo state) {
		this.state = state;
	}

}
