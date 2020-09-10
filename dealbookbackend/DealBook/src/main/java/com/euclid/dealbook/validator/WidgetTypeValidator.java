package com.euclid.dealbook.validator;

import com.euclid.dealbook.exception.ValidationException;

public class WidgetTypeValidator {

	public static void validateGet(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Widget Type ID Required");
		}
	}
}
