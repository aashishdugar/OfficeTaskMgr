package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.exception.ApplicationException;

public interface AddressService {

	List<String> findDistinctCity() throws ApplicationException;

}
