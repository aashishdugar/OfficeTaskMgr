package com.euclid.dealbook.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.UserWidget;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.UserWidgetService;
import com.euclid.dealbook.vo.Response;
import com.euclid.dealbook.vo.UserWidgetResponse;

@RestController
@RequestMapping("/userwidget")
public class UserWidgetController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserWidgetController.class);

	@Autowired
	private UserWidgetService userWidgetService;

	@PostMapping("/create")
	public Response create(@RequestBody UserWidget userWidgetObject) {
		try {
			LOGGER.debug("Create UserWidget");
			UserWidgetResponse response = userWidgetService.create(userWidgetObject);
			return createResponse(response, "Widget Created Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getall")
	public Response getall() {
		try {
			LOGGER.debug("Get All UserWidget");
			return createResponse(userWidgetService.getall(), "Widget List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/get/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get UserWidget");
			UserWidget userWidgetObject = userWidgetService.get(id);
			return createResponse(userWidgetObject, "Widget Get Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/delete/{id}")
	public Response delete(@PathVariable int id) {
		try {
			LOGGER.debug("Delete UserWidget");
			userWidgetService.delete(id);
			return createResponse(null, "Widget Deleted");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/update")
	public Response update(@RequestBody UserWidget userWidgetObject) {
		try {
			LOGGER.debug("Update UserWidget");
			userWidgetService.save(userWidgetObject);
			return createResponse(userWidgetObject, "Widget Updated Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
