package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.UserWidget;
import com.euclid.dealbook.dao.UserWidgetView;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.vo.UserWidgetResponse;

public interface UserWidgetBean {

	List<UserWidgetView> getall() throws ApplicationException;

	UserWidget get(long id) throws ApplicationException;

	void save(UserWidget userWidget) throws ApplicationException;

	UserWidgetResponse create(UserWidget userWidget) throws ApplicationException;

	void delete(long id) throws ApplicationException;

	List<UserWidgetResponse> getWidgetByContact(Contact contact) throws ApplicationException;

	UserWidgetResponse getWidgetList(long id, long contactId) throws ApplicationException;

}
