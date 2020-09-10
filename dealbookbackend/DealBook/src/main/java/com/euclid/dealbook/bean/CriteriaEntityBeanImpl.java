package com.euclid.dealbook.bean;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.CriteriaEntityRepository;

@Repository
public class CriteriaEntityBeanImpl implements CriteriaEntityBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(CriteriaEntityBeanImpl.class);

	@Autowired
	private CriteriaEntityRepository criteriaEntityRepository;

	/**
	 * Method to Get CriteriaEntity List details.
	 * 
	 * @return Get CriteriaEntity List
	 */
	@Override
	public List<CriteriaEntity> getall() {
		LOGGER.debug("Getting List of all CriteriaEntity");
		return (List<CriteriaEntity>) criteriaEntityRepository.findAll();

	}

	/**
	 * Method to Get CriteriaEntity details.
	 * 
	 * @param CriteriaEntity Id
	 * @return CriteriaEntity
	 * @throws ApplicationException
	 */
	@Override
	public CriteriaEntity get(long criteriaId) throws ApplicationException {
		try {
			LOGGER.debug("Get CriteriaEntity details of - " + criteriaId + " Started");
			Optional<CriteriaEntity> criteriaEntityOptional = criteriaEntityRepository.findById(criteriaId);
			if (!criteriaEntityOptional.isPresent()) {
				throw new ApplicationException("CriteriaEntity Not Found for Id " + criteriaId);
			}
			CriteriaEntity criteriaEntityObj = criteriaEntityOptional.get();
			return criteriaEntityObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

}
