package com.euclid.dealbook.validator;

import java.util.Objects;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.exception.ValidationException;

public class UserValidator {

	public static void validateUserToChangePassword(Contact user) throws ValidationException {

		validateUserEmailAndPassword(user);

		if (Objects.isNull(user.getToken())) {
			throw new ValidationException("Please Provide Token.");
		}
	}

	public static void validateUserEmailAndPassword(Contact user) throws ValidationException {

		validateUserEmail(user);

		if (Objects.isNull(user.getPassword()) || user.getPassword().isEmpty()) {
			throw new ValidationException("User pasword should not be null or empty.");
		}
	}

	public static void validateUserEmail(Contact user) throws ValidationException {

		if (Objects.isNull(user) || Objects.isNull(user.getEmail()) || user.getEmail().isEmpty()) {
			throw new ValidationException("User email should not be null or empty.");
		}
	}
}
