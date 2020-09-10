package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.StateBean;
import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.CountryValidator;

@Service
public class StateServiceImp implements StateService {
	private static final Logger LOGGER = LoggerFactory.getLogger(StateServiceImp.class);

	@Autowired
	private StateBean stateBean;

	@Override
	public List<State> findByCountry(long countryId) throws ApplicationException {
		try {
			LOGGER.debug("Get StateList of Country");
			CountryValidator.validateGet(countryId);
			return stateBean.findByCountry(countryId);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

}
