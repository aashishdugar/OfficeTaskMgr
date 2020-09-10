package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.Country;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.vo.CountryWithStates;

public interface CountryBean {

	List<Country> getall() throws ApplicationException;

	Country get(long id) throws ApplicationException;

	List<CountryWithStates> getAllCountryWithState() throws ApplicationException;

}
