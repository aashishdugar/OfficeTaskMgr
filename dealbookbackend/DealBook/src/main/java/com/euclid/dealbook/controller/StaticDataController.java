package com.euclid.dealbook.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.StaticDataService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/staticdata")
public class StaticDataController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(StaticDataController.class);

	@Autowired
	private StaticDataService staticDataService;

	@PostMapping("/getstatic/{id}")
	public Response getStatic(@PathVariable int id) {
		try {
			LOGGER.debug("Get Static Data for Contacts");
			return createResponse(staticDataService.getStatic(id), "Static Data Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
