package com.euclid.dealbook.validator;

import com.euclid.dealbook.exception.ValidationException;

public class FilterByValidator {

	public static void validateGet(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("FilterBy Details Required");
		}
	}
}
