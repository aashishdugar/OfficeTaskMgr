package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.FilterBy;
import com.euclid.dealbook.exception.ApplicationException;

public interface FilterByBean {

	List<FilterBy> getall() throws ApplicationException;

	FilterBy get(long id) throws ApplicationException;

	List<FilterBy> findByCriteriaEntity(long criteriaEntityId) throws ApplicationException;

}
