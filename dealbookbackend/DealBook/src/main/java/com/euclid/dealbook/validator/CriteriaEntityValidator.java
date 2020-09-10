package com.euclid.dealbook.validator;

import com.euclid.dealbook.exception.ValidationException;

public class CriteriaEntityValidator {

	public static void validateGet(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Criteria Details Required");
		}
	}
}
