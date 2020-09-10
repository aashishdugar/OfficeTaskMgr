package com.euclid.dealbook.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.StateService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/state")
public class StateController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(StateController.class);

	@Autowired
	private StateService stateService;

	@PostMapping("/findbycountry/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get StateList from Country");
			List<State> contactObject = stateService.findByCountry(id);
			return createResponse(contactObject);
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
