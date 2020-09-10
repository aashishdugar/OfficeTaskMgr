package com.euclid.dealbook.bean;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.dao.FilterBy;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.FilterByRepository;

@Repository
public class FilterByBeanImpl implements FilterByBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(FilterByBeanImpl.class);

	@Autowired
	private FilterByRepository filterByRepository;

	@Autowired
	private CriteriaEntityBeanImpl criteriaEntityBeanImpl;

	/**
	 * Method to Get FilterBy List details.
	 * 
	 * @return Get FilterBy List
	 */
	@Override
	public List<FilterBy> getall() {
		LOGGER.debug("Getting List of all FilterBy");
		return (List<FilterBy>) filterByRepository.findAll();

	}

	/**
	 * Method to Get FilterBy details.
	 * 
	 * @param FilterBy Id
	 * @return FilterBy
	 * @throws ApplicationException
	 */
	@Override
	public FilterBy get(long filterById) throws ApplicationException {
		try {
			LOGGER.debug("Get FilterBy details of - " + filterById + " Started");
			Optional<FilterBy> filterByOptional = filterByRepository.findById(filterById);
			if (!filterByOptional.isPresent()) {
				throw new ApplicationException("FilterBy Not Found for Id " + filterById);
			}
			FilterBy filterByObj = filterByOptional.get();
			return filterByObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get FilterList using CriteriaEntity details.
	 * 
	 * @param CriteriaEntity Id
	 * @return FilterList
	 * @throws ApplicationException
	 */
	@Override
	public List<FilterBy> findByCriteriaEntity(long criteriaEntityId) throws ApplicationException {
		try {
			LOGGER.debug("Get FilterByList From CriteriaEntity - " + criteriaEntityId + " Started");
			CriteriaEntity criteriaEntityObj = criteriaEntityBeanImpl.get(criteriaEntityId);
			return filterByRepository.findByCriteriaEntity(criteriaEntityObj);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}
}
