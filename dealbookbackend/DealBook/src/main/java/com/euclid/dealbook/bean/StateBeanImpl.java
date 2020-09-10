package com.euclid.dealbook.bean;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Country;
import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.StateRepository;

@Repository
public class StateBeanImpl implements StateBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(StateBeanImpl.class);

	@Autowired
	private StateRepository stateRepository;

	@Autowired
	CountryBeanImpl countryBeanImpl;

	/**
	 * Method to Get State List details.
	 * 
	 * @return Get State List
	 */
	@Override
	public List<State> getall() {
		LOGGER.debug("Getting List of all State");
		return (List<State>) stateRepository.findAll();

	}

	/**
	 * Method to Get State details.
	 * 
	 * @param State Id
	 * @return State
	 * @throws ApplicationException
	 */
	@Override
	public State get(long stateId) throws ApplicationException {
		try {
			LOGGER.debug("Get State details of - " + stateId + " Started");
			Optional<State> stateOptional = stateRepository.findById(stateId);
			if (!stateOptional.isPresent()) {
				throw new ApplicationException("State Not Found for Id " + stateId);
			}
			State stateObj = stateOptional.get();
			return stateObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get StateList using Country details.
	 * 
	 * @param Country Id
	 * @return StateList
	 * @throws ApplicationException
	 */
	@Override
	public List<State> findByCountry(long countryId) throws ApplicationException {
		try {
			Country countryObj = countryBeanImpl.get(countryId);
			return stateRepository.findByCountry(countryObj);

		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get State using Name details.
	 * 
	 * @param State Name
	 * @return State
	 * @throws ApplicationException
	 */
	@Override
	public State findByName(String name) throws ApplicationException {
		try {
			LOGGER.debug("Get State details of - " + name + " Started");
			List<State> stateList = stateRepository.findByName(name);
			if (stateList.isEmpty()) {
				throw new ApplicationException("State Not Found for Name " + name);
			}
			return stateList.get(0);
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}
}
