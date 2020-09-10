package com.euclid.dealbook.validator;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.exception.ValidationException;

public class ContactValidator {

	public static void validateCreate(Contact contact) throws ValidationException {
		try {
			if (null == contact.getEmail() || contact.getEmail().isEmpty()) {
				throw new ValidationException("Contact Email Required ");
			}
			if (null == contact.getMobile() || contact.getMobile().isEmpty()) {
				throw new ValidationException("Contact Mobile Required ");
			}
			if (null == contact.getName() || contact.getName().isEmpty()) {
				throw new ValidationException("Contact Name Required");
			}
			if (null == contact.getDesignation() || contact.getDesignation().isEmpty()) {
				throw new ValidationException("Contact Designation Required ");
			}
			if (null == contact.getContactorg() || null == contact.getContactorg().getId()) {
				throw new ValidationException("Contact Organization Required ");
			}
			if (null == contact.getCreatedBy()) {
				throw new ValidationException("Contact CreatedBy Required ");
			}
		} catch (Exception e) {
			throw new ValidationException(e.getMessage());

		}

	}

	public static void validateUpdate(Contact contact) throws ValidationException {
		if (null == contact.getId()) {
			throw new ValidationException("Contact Required ");
		}
		if (null == contact.getUpdatedBy()) {
			throw new ValidationException("Contact UpdatedBy Required ");
		}
	}

	public static void validateDelete(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Contact ID Required ");
		}
	}

	public static void validateGet(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Contact ID Required ");
		}
	}

	/**
	 * This method will validate contact which are created from the excel sheet or
	 * imported from the excel sheet.
	 * 
	 * @param contact
	 * @throws ValidationException
	 */
	public static void validateContactForImport(Contact contact) throws ValidationException {
		try {
			if (null == contact.getEmail() || contact.getEmail().isEmpty()) {
				throw new ValidationException("Contact Email ID Required ");
			}
			if (null == contact.getMobile() || contact.getMobile().isEmpty()) {
				throw new ValidationException("Contact Mobile Required");
			}
			if (null == contact.getName() || contact.getName().isEmpty()) {
				throw new ValidationException("Contact Name Required");
			}
			if (null == contact.getDesignation() || contact.getDesignation().isEmpty()) {
				throw new ValidationException("Contact Designation Required");
			}
			if (null != contact.getSalutation() && !contact.getSalutation().isEmpty()
					&& (!"Mr".equalsIgnoreCase(contact.getSalutation())
							&& !"Miss".equalsIgnoreCase(contact.getSalutation())
							&& !"Mrs".equalsIgnoreCase(contact.getSalutation()))) {
				throw new ValidationException("Invalid Salutation");
			}
			if (null == contact.getContactorg() || null == contact.getContactorg().getName()) {
				throw new ValidationException("Contact Organization Required");
			}
			if (null != contact.getReportingto() && null == contact.getReportingto().getEmail()) {
				throw new ValidationException("Contact Reporting To Required");
			}
			if (null != contact.getContactOwner() && null == contact.getContactOwner().getEmail()) {
				throw new ValidationException("Contact Owne To not provided");
			}
		} catch (Exception e) {
			throw new ValidationException(e.getMessage());

		}
	}
}
