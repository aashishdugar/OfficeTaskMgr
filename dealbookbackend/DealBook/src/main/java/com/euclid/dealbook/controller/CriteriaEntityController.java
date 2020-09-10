package com.euclid.dealbook.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.CriteriaEntityService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/criteria")
public class CriteriaEntityController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CriteriaEntityController.class);

	@Autowired
	private CriteriaEntityService criteriaEntityService;

	@PostMapping("/getall")
	public Response getall() {
		try {
			LOGGER.debug("Get All CriteriaEntity");
			return createResponse(criteriaEntityService.getall(), "Criteria List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/get/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get CriteriaEntity");
			CriteriaEntity criteriaEntity = criteriaEntityService.get(id);
			return createResponse(criteriaEntity, "Criteria Fetched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
