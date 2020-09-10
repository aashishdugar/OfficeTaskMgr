package com.euclid.dealbook.excel;

import com.euclid.dealbook.exception.ValidationException;

public class ContactExcelValidator {

	public static void validate(ContactRowData contact) throws ValidationException {
		if (null == contact) {
			throw new ValidationException("Invalid Data");
		}
		if (null == contact.getName()) {
			throw new ValidationException("Contact Name Not Provided");
		}
		if (null == contact.getEmail()) {
			throw new ValidationException("Contact Email Not Provided");
		}
		if (null == contact.getMobile()) {
			throw new ValidationException("Contact Mobile Not Provided");
		}
		if (null == contact.getDesignation()) {
			throw new ValidationException("Contact Designation Not Provided");
		}
		if (null == contact.getIsUser()) {
			throw new ValidationException("IsUser Not Provided");
		}
		if (null == contact.getContactOrg()) {
			throw new ValidationException("ContactOrg Not Provided");
		}
		if (null == contact.getReportingTo()) {
			throw new ValidationException("ReportingTo Not Provided");
		}
		if (null == contact.getCountry()) {
			throw new ValidationException("Country Not Provided");
		}
		if (null == contact.getState()) {
			throw new ValidationException("State Not Provided");
		}
		if (null == contact.getCity()) {
			throw new ValidationException("City Not Provided");
		}
		if (null == contact.getContactOwner()) {
			throw new ValidationException("ContactOwner Not Provided");
		}

	}

}
