package com.euclid.dealbook.service;

import java.util.List;

import com.euclid.dealbook.dao.UserWidget;
import com.euclid.dealbook.dao.UserWidgetView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.vo.UserWidgetResponse;

public interface UserWidgetService {

	UserWidgetResponse create(UserWidget userWidget) throws ApplicationException;

	List<UserWidgetView> getall() throws ApplicationException;

	UserWidget get(long id) throws ApplicationException;

	void save(UserWidget userWidget) throws ApplicationException;

	void delete(long id) throws ApplicationException;

	void removeJsonIssue(UserWidget userWidgetObj);

}
