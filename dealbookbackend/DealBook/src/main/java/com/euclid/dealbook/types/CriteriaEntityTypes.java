package com.euclid.dealbook.types;

public enum CriteriaEntityTypes {

	CONTACT("Contact"), ACTIVITY("Activity");

	private final String value;

	private CriteriaEntityTypes(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
