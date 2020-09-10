package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.exception.ApplicationException;

public interface CriteriaEntityService {

	List<CriteriaEntity> getall() throws ApplicationException;

	CriteriaEntity get(long id) throws ApplicationException;

}
