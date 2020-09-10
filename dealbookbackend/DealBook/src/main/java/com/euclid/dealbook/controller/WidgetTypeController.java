package com.euclid.dealbook.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.WidgetType;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.WidgetTypeService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/widgettype")
public class WidgetTypeController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(WidgetTypeController.class);

	@Autowired
	private WidgetTypeService widgetTypeService;

	@PostMapping("/getall")
	public Response getall() {
		try {
			LOGGER.debug("Get All WidgetType");
			return createResponse(widgetTypeService.getall(), "Widget Type List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/get/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get WidgetType");
			WidgetType widgetTypeObject = widgetTypeService.get(id);
			return createResponse(widgetTypeObject, "Widget Type Get Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}
}
