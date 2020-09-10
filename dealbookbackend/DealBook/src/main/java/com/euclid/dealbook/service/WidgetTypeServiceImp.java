package com.euclid.dealbook.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.bean.WidgetTypeBean;
import com.euclid.dealbook.dao.WidgetType;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.validator.WidgetTypeValidator;

@Service
public class WidgetTypeServiceImp implements WidgetTypeService {

	private static final Logger LOGGER = LoggerFactory.getLogger(WidgetTypeServiceImp.class);

	@Autowired
	private WidgetTypeBean widgetTypeBean;

	@Override
	public List<WidgetType> getall() throws ApplicationException {
		try {
			LOGGER.debug("Get All WidgetType");
			return widgetTypeBean.getall();
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public WidgetType get(long id) throws ApplicationException {
		try {
			LOGGER.debug("Get WidgetType");
			WidgetTypeValidator.validateGet(id);
			return widgetTypeBean.get(id);
		} catch (Exception e) {
			throw new ApplicationException(e.getMessage());

		}

	}

}
