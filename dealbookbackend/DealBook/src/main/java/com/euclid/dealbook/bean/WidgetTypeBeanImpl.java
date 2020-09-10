package com.euclid.dealbook.bean;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.WidgetType;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.WidgetTypeRepository;

@Repository
public class WidgetTypeBeanImpl implements WidgetTypeBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(CountryBeanImpl.class);

	@Autowired
	private WidgetTypeRepository widgetTypeRepository;

	/**
	 * Method to Get WidgetType List.
	 * 
	 * @return WidgetType List
	 */
	@Override
	public List<WidgetType> getall() {
		LOGGER.debug("Getting List of all WidgetType");
		return (List<WidgetType>) widgetTypeRepository.findAll();

	}

	/**
	 * Method to Get WidgetType Details.
	 * 
	 * @param Login WidgetType Id
	 * @return WidgetType
	 * @throws ApplicationException
	 */
	@Override
	public WidgetType get(long widgetTypeId) throws ApplicationException {
		try {
			LOGGER.debug("Get WidgetType details of - " + widgetTypeId + " Started");
			Optional<WidgetType> widgetTypeOptional = widgetTypeRepository.findById(widgetTypeId);
			if (!widgetTypeOptional.isPresent()) {
				throw new ApplicationException("WidgetType Not Found for Id " + widgetTypeId);
			}
			WidgetType widgetTypeObj = widgetTypeOptional.get();
			return widgetTypeObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

}
