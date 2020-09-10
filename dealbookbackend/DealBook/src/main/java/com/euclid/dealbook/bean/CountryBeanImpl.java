package com.euclid.dealbook.bean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Country;
import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.CountryRepository;
import com.euclid.dealbook.repository.StateRepository;
import com.euclid.dealbook.vo.CountryWithStates;

@Repository
public class CountryBeanImpl implements CountryBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(CountryBeanImpl.class);

	@Autowired
	private CountryRepository countryRepository;

	@Autowired
	private StateRepository stateRepository;

	/**
	 * Method to Get Country List details.
	 * 
	 * @return Get Country List
	 */
	@Override
	public List<Country> getall() {
		LOGGER.debug("Getting List of all Country");
		return (List<Country>) countryRepository.findAll();

	}

	/**
	 * Method to Get Country details.
	 * 
	 * @param Country Id
	 * @return Country
	 * @throws ApplicationException
	 */
	@Override
	public Country get(long countryId) throws ApplicationException {
		try {
			LOGGER.debug("Get Country details of - " + countryId + " Started");
			Optional<Country> countryOptional = countryRepository.findById(countryId);
			if (!countryOptional.isPresent()) {
				throw new ApplicationException("Country Not Found for Id " + countryId);
			}
			Country countryObj = countryOptional.get();
			return countryObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get Country With State details.
	 * 
	 * @return Get Country With State
	 * @throws ApplicationException
	 */
	@Override
	public List<CountryWithStates> getAllCountryWithState() throws ApplicationException {
		try {
			LOGGER.debug("Get All Country With StateList");
			List<Country> countryList = getall();
			if (countryList.isEmpty()) {
				throw new ApplicationException("Country Not Found In System");
			}
			List<CountryWithStates> countryWithStateList = new ArrayList<>();
			for (Country country : countryList) {
				CountryWithStates countryWithStates = new CountryWithStates();
				countryWithStates.setId(country.getId());
				countryWithStates.setCountryName(country.getName());
				List<State> stateList = stateRepository.findByCountry(country);
				for (State state : stateList) {
					state.setCountry(null);
				}
				countryWithStates.setStateList(stateList);
				countryWithStateList.add(countryWithStates);

			}
			return countryWithStateList;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

}
