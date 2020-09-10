package com.euclid.dealbook.bean;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.ApplicationException;

public interface UserCheckpointBean {

	ContactDetailsView login(Contact user) throws ApplicationException;

	void resetPassword(Contact user) throws ApplicationException;

	void changePassword(Contact user) throws ApplicationException;

}
