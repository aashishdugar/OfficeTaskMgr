package com.euclid.dealbook.vo;

import java.io.Serializable;

public class StateVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private CountryVo country;

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
	 * @return the country
	 */
	public CountryVo getCountry() {
		return country;
	}

	/**
	 * @param country the country to set
	 */
	public void setCountry(CountryVo country) {
		this.country = country;
	}

}
