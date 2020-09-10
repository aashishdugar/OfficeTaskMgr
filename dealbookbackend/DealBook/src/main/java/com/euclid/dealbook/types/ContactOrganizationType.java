package com.euclid.dealbook.types;

public enum ContactOrganizationType {

	EUCLIUDINNOCATIONS("Euclid Innovations");

	private final String value;

	private ContactOrganizationType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
