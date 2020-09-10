package com.euclid.dealbook.bean;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.AddressRepository;

@Repository
public class AddressBeanImpl implements AddressBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(AddressBeanImpl.class);

	@Autowired
	private AddressRepository addressRepository;

	/**
	 * Method to Get Distinct City details.
	 * 
	 * @return Distinct City List
	 * @throws ApplicationException
	 */
	@Override
	public List<String> findDistinctCity() throws ApplicationException {
		try {
			LOGGER.debug("Get All Distinct City");
			List<String> distinctCity = addressRepository.findDistinctCity();
			/*
			 * Remove Empty City
			 */
			distinctCity.remove("");
			return distinctCity;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}
}
