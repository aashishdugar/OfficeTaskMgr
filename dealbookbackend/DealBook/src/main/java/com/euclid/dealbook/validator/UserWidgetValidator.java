package com.euclid.dealbook.validator;

import java.util.Arrays;
import java.util.List;

import com.euclid.dealbook.dao.UserWidget;
import com.euclid.dealbook.dao.WidgetFilter;
import com.euclid.dealbook.exception.ValidationException;

public class UserWidgetValidator {

	public static void validateCreate(UserWidget userWidget) throws ValidationException {
		try {
			if (null == userWidget.getTitle() || userWidget.getTitle().isEmpty()) {
				throw new ValidationException("Widget Title Required ");
			}
			if (null == userWidget.getOwner() || null == userWidget.getOwner().getId()) {
				throw new ValidationException("Widget Contact Required");
			}
			if (null == userWidget.getCriteriaEntity() || null == userWidget.getCriteriaEntity().getId()) {
				throw new ValidationException("Criteria Required");
			}
			if (userWidget.getWidgetFilterList().isEmpty()) {
				throw new ValidationException("Widget Filter Required");

			}
			for (WidgetFilter widgetFilter : userWidget.getWidgetFilterList()) {
				if (null == widgetFilter.getName() || widgetFilter.getName().isEmpty()) {
					throw new ValidationException("Filter Name Required ");
				}
				if (null == widgetFilter.getFilterValue() || widgetFilter.getFilterValue().isEmpty()) {
					throw new ValidationException("Filter Value Required ");
				}
				String filterValue = widgetFilter.getFilterValue();
				if (filterValue.equalsIgnoreCase("")) {
					throw new ValidationException("Invalid Filter Value " + filterValue);

				}
				String[] elements = filterValue.split(":::");
				List<String> fixedLenghtList = Arrays.asList(elements);
				for (String value : fixedLenghtList) {
					if (value.equalsIgnoreCase("")) {
						throw new ValidationException("Invalid Filter Value " + filterValue);

					}
				}
				widgetFilter.setUserWidget(userWidget);

			}
		} catch (Exception e) {
			throw new ValidationException(e.getMessage());

		}

	}

	public static void validateUpdate(UserWidget userWidget) throws ValidationException {
		if (null == userWidget.getId()) {
			throw new ValidationException("Widget ID Required ");
		}
	}

	public static void validateDelete(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Widget ID Required ");
		}
	}

	public static void validateGet(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Widget ID Required ");
		}
	}

	public static void validateContact(Long id) throws ValidationException {
		if (null == id) {
			throw new ValidationException("Contact ID Required ");
		}
	}

}
