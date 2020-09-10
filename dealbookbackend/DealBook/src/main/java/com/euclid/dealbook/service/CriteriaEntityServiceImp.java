package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.CriteriaEntityBean;
import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.CriteriaEntityValidator;

@Service
public class CriteriaEntityServiceImp implements CriteriaEntityService {

	private static final Logger LOGGER = LoggerFactory.getLogger(CriteriaEntityServiceImp.class);

	@Autowired
	private CriteriaEntityBean criteriaEntityBean;

	@Override
	public List<CriteriaEntity> getall() throws ApplicationException {
		try {
			LOGGER.debug("Get All CriteriaEntity");
			return criteriaEntityBean.getall();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public CriteriaEntity get(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get CriteriaEntity");
			CriteriaEntityValidator.validateGet(id);
			return criteriaEntityBean.get(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

}
