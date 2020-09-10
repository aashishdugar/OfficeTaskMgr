package com.euclid.dealbook.types;

public enum FilterByTypes {

	COMPANY("Company"), DESIGNATION("Designation"), LOCATION("Location"), REPORTTO("Report To"),
	CONTACTOWNER("Contact Owner"), LASTACTIVEDATE("Last Active Date"), CREATEDATE("Creation Date"),
	ACTIVITYTYPE("Activity Type"), FOLLOWUPDATE("FollowUp Date"), UPDATEDBY("Update By"), CREATEDON("Created On");

	private final String value;

	private FilterByTypes(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
