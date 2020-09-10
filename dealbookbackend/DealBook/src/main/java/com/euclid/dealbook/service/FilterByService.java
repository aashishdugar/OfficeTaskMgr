package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.dao.FilterBy;
import com.euclid.dealbook.exception.ApplicationException;

public interface FilterByService {

	List<FilterBy> getall() throws ApplicationException;

	FilterBy get(long id) throws ApplicationException;

	List<FilterBy> findByCriteriaEntity(long criteriaEntityId) throws ApplicationException;

}
