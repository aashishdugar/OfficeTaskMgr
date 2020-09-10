package com.euclid.dealbook.validator;

import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.exception.ValidationException;

public class ContactOrgValidator {

	public static void validateGet(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Contact Organization ID Required");
		}
	}

	public static void validateCreate(ContactOrg contactOrg) throws ValidationException {
		try {
			if (null == contactOrg.getName() || contactOrg.getName().isEmpty()) {
				throw new ValidationException("Contact Organization Name Required ");
			}
			if (null == contactOrg.getCreatedBy()) {
				throw new ValidationException("Contact Organization CreatedBy Required ");
			}
			if (null == contactOrg.getCreatedByName() || contactOrg.getCreatedByName().isEmpty()
					|| "" == contactOrg.getCreatedByName()) {
				throw new ValidationException("Contact Organization CreatedBy Name Required ");
			}
		} catch (Exception e) {
			throw new ValidationException(e.getMessage());

		}

	}

	public static void validateUpdate(ContactOrg contactOrg) throws ValidationException {
		if (null == contactOrg.getId()) {
			throw new ValidationException("Contact Organization Required ");
		}
		if (null == contactOrg.getUpdatedBy()) {
			throw new ValidationException("Contact Organization UpdatedBy Required ");
		}
		if (null == contactOrg.getUpdatedByName() || contactOrg.getUpdatedByName().isEmpty()
				|| "" == contactOrg.getUpdatedByName()) {
			throw new ValidationException("Contact Organization UpdatedBy Name Required ");
		}
	}

	public static void validateDelete(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Contact Organization ID Required ");
		}
	}

}
