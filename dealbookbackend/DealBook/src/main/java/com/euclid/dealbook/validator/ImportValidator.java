package com.euclid.dealbook.validator;

import java.io.File;
import java.util.Objects;

import com.euclid.dealbook.excel.ImpActivity;
import com.euclid.dealbook.exception.ValidationException;

public class ImportValidator {

	/**
	 * Method to check mandatory fields data is present in the import file or not.
	 * 
	 * @param activity
	 * @throws ValidationException
	 */
	public static void validateActivityImport(ImpActivity activity) throws ValidationException {

		if (Objects.isNull(activity.getComments()) || activity.getComments().trim().isEmpty()) {

			throw new ValidationException("Comments/Notes is mandatory.");
		} else if (Objects.isNull(activity.getContactEmail()) || activity.getContactEmail().trim().isEmpty()) {

			throw new ValidationException("Contact Email is mandatory.");
		} else if (Objects.isNull(activity.getContactName()) || activity.getContactName().trim().isEmpty()) {

			throw new ValidationException("Contact Name is mandatory.");
		} else if (Objects.isNull(activity.getActivityType()) || activity.getActivityType().trim().isEmpty()) {

			throw new ValidationException("Activity Type is mandatory.");
		} else if (Objects.isNull(activity.getCreatedBy()) || activity.getCreatedBy().trim().isEmpty()) {

			throw new ValidationException("Created By is mandatory.");
		} else if (Objects.isNull(activity.getCreatedDate())) {

			throw new ValidationException("Created Date is mandatory.");
		}
	}

	/**
	 * Method to check whether file is excel file or not.
	 * 
	 * @param fileObject
	 * @throws ValidationException
	 */
	public static void validateExcelFile(File fileObject) throws ValidationException {

		if (Objects.isNull(fileObject)) {
			throw new ValidationException("File object is null.");
		} else {

			String absolutePath = fileObject.getAbsolutePath();
			int fileExtensionStartIndex = absolutePath.lastIndexOf(".");
			if (fileExtensionStartIndex == -1) {
				throw new ValidationException("File is not valid.");
			} else {
				String fileExtension = absolutePath.substring(fileExtensionStartIndex + 1);
				if (!"xls".equalsIgnoreCase(fileExtension) && !"xlsx".equalsIgnoreCase(fileExtension)) {
					throw new ValidationException("Only xls and xlsx files are allowed.");
				}
			}
		}
	}
}
