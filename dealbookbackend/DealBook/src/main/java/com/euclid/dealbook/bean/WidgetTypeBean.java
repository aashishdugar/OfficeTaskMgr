package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.WidgetType;
import com.euclid.dealbook.exception.ApplicationException;

public interface WidgetTypeBean {

	List<WidgetType> getall() throws ApplicationException;

	WidgetType get(long id) throws ApplicationException;

}
