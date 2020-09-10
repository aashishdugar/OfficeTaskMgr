package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.exception.ApplicationException;

public interface AddressBean {

	List<String> findDistinctCity() throws ApplicationException;

}
