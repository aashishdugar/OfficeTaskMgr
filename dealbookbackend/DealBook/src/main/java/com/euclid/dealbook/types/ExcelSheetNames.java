package com.euclid.dealbook.types;

public enum ExcelSheetNames {

	CONTACT("Contact"), ACTIVITY("Activity");

	private final String value;

	private ExcelSheetNames(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
