package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.exception.ApplicationException;

public interface StateService {

	List<State> findByCountry(long id) throws ApplicationException;

}
