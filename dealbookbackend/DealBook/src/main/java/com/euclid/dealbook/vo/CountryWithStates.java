package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.euclid.dealbook.dao.State;

public class CountryWithStates implements Serializable {

	private static final long serialVersionUID = 1L;

	private String countryName;
	private Long id;
	private List<State> stateList = new ArrayList<>();

	/**
	 * @return the countryName
	 */
	public String getCountryName() {
		return countryName;
	}

	/**
	 * @param countryName the countryName to set
	 */
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

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
	 * @return the stateList
	 */
	public List<State> getStateList() {
		return stateList;
	}

	/**
	 * @param stateList the stateList to set
	 */
	public void setStateList(List<State> stateList) {
		this.stateList = stateList;
	}

}
