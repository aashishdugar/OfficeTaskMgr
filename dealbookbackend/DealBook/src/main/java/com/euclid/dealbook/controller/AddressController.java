package com.euclid.dealbook.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.AddressService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/address")
public class AddressController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(AddressController.class);

	@Autowired
	private AddressService addressService;

	@PostMapping("/getcities")
	public Response findDistinctDesignation() {
		try {
			LOGGER.debug("find Distinct Cities from Address");
			return createResponse(addressService.findDistinctCity(), "City List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}
}
