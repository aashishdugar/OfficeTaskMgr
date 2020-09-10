package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.AddressBean;
import com.euclid.dealbook.exception.ApplicationException;

@Service
public class AddressServiceImp implements AddressService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AddressServiceImp.class);

	@Autowired
	private AddressBean addressBean;

	@Override
	public List<String> findDistinctCity() throws ApplicationException {
		try {
			LOGGER.debug("Get Distinct City");
			return addressBean.findDistinctCity();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

}
