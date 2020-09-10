package com.euclid.dealbook.validator;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.exception.ValidationException;

public class ActivityValidator {

	public static void validateCreate(Activity activity) throws ValidationException {
		try {

			if (null == activity.getNote() || activity.getNote().isEmpty()) {
				throw new ValidationException("Activity Note Required");
			}
			if (null == activity.getType() || null == activity.getType().getId()) {
				throw new ValidationException("Activity Type Required");
			}
			if (null == activity.getContact() || null == activity.getContact().getId()) {
				throw new ValidationException("Activity Contact Required");
			}
			if (null == activity.getCreatedBy()) {
				throw new ValidationException("Activity CreatedBy Required");
			}
			if (null == activity.getCreatedByName()) {
				throw new ValidationException("Activity CreatedBy Name Required");
			}
			if (activity.getIsFollowup()) {
				if (null == activity.getFollowupDate()) {
					throw new ValidationException("Activity FollowupDate Required");

				}
			}

		} catch (Exception e) {
			throw new ValidationException(e.getMessage());

		}

	}

	public static void validateUpdate(Activity activity) throws ValidationException {
		if (null == activity.getId()) {
			throw new ValidationException("Activity Required");
		}
		if (null == activity.getUpdatedBy()) {
			throw new ValidationException("Activity UpdatedBy Required");
		}
		if (null == activity.getUpdatedByName()) {
			throw new ValidationException("Activity UpdatedBy Name Required");
		}
	}

	public static void validateDelete(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Activity Required");
		}
	}

	public static void validateGet(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Activity Required");
		}
	}
}
