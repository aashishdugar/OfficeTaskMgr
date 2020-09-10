package com.euclid.dealbook.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.ActivityType;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.ActivityTypeService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/activitytype")
public class ActivityTypeController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ActivityTypeController.class);

	@Autowired
	private ActivityTypeService activityTypeService;

	@PostMapping("/getall")
	public Response getall() {
		try {
			LOGGER.debug("Get All ActivityType");
			return createResponse(activityTypeService.getall());
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/get/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get ActivityType");
			ActivityType activityTypeObject = activityTypeService.get(id);
			return createResponse(activityTypeObject);
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
