package com.euclid.dealbook.excel;

public enum ActivityColumnType {
	/**
	 * Activity Name
	 */
	ACTIVITY_NAME("GENERAL"),
	/**
	 * Comments
	 */
	COMMENTS("GENERAL"),
	/**
	 * Followup Date
	 */
	FOLLOW_UP_DATE("GENERAL"),
	/**
	 * Contact(email)
	 */
	CONTACT_EMAIL("GENERAL"),
	/**
	 * Contact
	 */
	CONTACT_NAME("GENERAL"),
	/**
	 * Activity Type
	 */
	ACTIVITY_TYPE("GENERAL"),
	/**
	 * CreatedBy
	 */
	CREATED_BY("GENERAL"),
	/**
	 * UpdatedBy
	 */
	UPDATED_BY("GENERAL"),
	/**
	 * CreatedDate
	 */
	CREATED_DATE("GENERAL"),
	/**
	 * UpdatedDate
	 */
	UPDATED_DATE("GENERAL"),
	/**
	 * IsActive
	 */
	IS_ACTIVE("GENERAL"),
	/**
	 * IsPrivate
	 */
	IS_PRIVATE("GENERAL");

	private String value;

	private ActivityColumnType(String value) {
		this.value = value;
	}

	/**
	 * Gets the value.
	 *
	 * @return Response of the status
	 * @PTS Gets the value.
	 */
	public String getValue() {
		return this.value;
	}

	/**
	 * From string.
	 *
	 * @param text the text
	 * @return the contact column type
	 */
	public static ActivityColumnType fromString(String text) {
		for (ActivityColumnType columnType : ActivityColumnType.values()) {
			if (columnType.getValue().equalsIgnoreCase(text)) {
				return columnType;
			}
		}
		return null;
	}

	/**
	 * By string.
	 *
	 * @param text the text
	 * @return the contact column type
	 */
	public static ActivityColumnType byString(String text) {
		return ActivityColumnType.valueOf(text);
	}
}
