package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.FilterByBean;
import com.euclid.dealbook.dao.FilterBy;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.FilterByValidator;

@Service
public class FilterByServiceImp implements FilterByService {

	private static final Logger LOGGER = LoggerFactory.getLogger(FilterByServiceImp.class);

	@Autowired
	private FilterByBean filterByBean;

	@Override
	public List<FilterBy> getall() throws ApplicationException {
		try {
			LOGGER.debug("Get All FilterBy");
			return filterByBean.getall();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public FilterBy get(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get FilterBy");
			FilterByValidator.validateGet(id);
			return filterByBean.get(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

	@Override
	public List<FilterBy> findByCriteriaEntity(long criteriaEntityId) throws ApplicationException {
		try {
			LOGGER.debug("Get FilterByList from Criteria");
			FilterByValidator.validateGet(criteriaEntityId);
			return filterByBean.findByCriteriaEntity(criteriaEntityId);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

}
