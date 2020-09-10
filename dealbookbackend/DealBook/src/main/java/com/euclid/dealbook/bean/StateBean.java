package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.exception.ApplicationException;

public interface StateBean {

	List<State> getall() throws ApplicationException;

	State get(long id) throws ApplicationException;

	List<State> findByCountry(long id) throws ApplicationException;

	State findByName(String name) throws ApplicationException;
}
