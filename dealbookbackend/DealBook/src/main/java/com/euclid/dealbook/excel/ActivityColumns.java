package com.euclid.dealbook.excel;

public enum ActivityColumns {
	/**
	 * Activity Name
	 */
	ACTIVITY_NAME("Activity Name"),
	/**
	 * Comments
	 */
	COMMENTS("Comments"),
	/**
	 * Followup Date
	 */
	FOLLOW_UP_DATE("Followup Date"),
	/**
	 * Contact(email)
	 */
	CONTACT_EMAIL("Contact(email)"),
	/**
	 * Contact
	 */
	CONTACT_NAME("Contact"),
	/**
	 * Activity Type
	 */
	ACTIVITY_TYPE("Activity Type"),
	/**
	 * CreatedBy
	 */
	CREATED_BY("CreatedBy"),
	/**
	 * UpdatedBy
	 */
	UPDATED_BY("UpdatedBy"),
	/**
	 * CreatedDate
	 */
	CREATED_DATE("CreatedDate"),
	/**
	 * UpdatedDate
	 */
	UPDATED_DATE("UpdatedDate"),
	/**
	 * IsActive
	 */
	IS_ACTIVE("IsActive"),
	/**
	 * IsPrivate
	 */
	IS_PRIVATE("IsPrivate");

	private String value;

	/**
	 * @param value
	 */
	ActivityColumns(String value) {
		this.value = value;
	}

	/**
	 * @return
	 */
	public String getValue() {
		return this.value;
	}

	/**
	 * @param text
	 * @return
	 */
	public static ActivityColumns fromString(String text) {
		for (ActivityColumns activityColumns : ActivityColumns.values()) {
			if (activityColumns.getValue().equalsIgnoreCase(text)) {
				return activityColumns;
			}
		}
		return null;
	}
}
