package com.euclid.dealbook.bean;

import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.vo.ContactStaticVo;

public interface StaticDataBean {

	ContactStaticVo getStatic(long contactId) throws ApplicationException;

}
