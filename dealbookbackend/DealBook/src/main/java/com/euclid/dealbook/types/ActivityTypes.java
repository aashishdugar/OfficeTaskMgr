package com.euclid.dealbook.types;

public enum ActivityTypes {

	CALL("Call"), EMAIL("Email"), MEETING("Meeting"), TEXT("Text");

	private final String value;

	private ActivityTypes(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
