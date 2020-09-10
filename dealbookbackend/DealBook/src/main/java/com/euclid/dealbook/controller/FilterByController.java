package com.euclid.dealbook.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.FilterBy;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.FilterByService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/filterby")
public class FilterByController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(FilterByController.class);

	@Autowired
	private FilterByService filterByService;

	@PostMapping("/getall")
	public Response getall() {
		try {
			LOGGER.debug("Get All FilterBy");
			return createResponse(filterByService.getall(), "Filter List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/get/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get FilterBy");
			FilterBy filterBy = filterByService.get(id);
			return createResponse(filterBy, "Filter Get Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/findbycriteria/{id}")
	public Response findByCriteriaEntity(@PathVariable int id) {
		try {
			LOGGER.debug("Get FilterBy");
			return createResponse(filterByService.findByCriteriaEntity(id), "Filter List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
