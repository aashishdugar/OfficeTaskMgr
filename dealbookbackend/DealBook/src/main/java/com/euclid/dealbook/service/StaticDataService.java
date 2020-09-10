package com.euclid.dealbook.service;

import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.vo.ContactStaticVo;

public interface StaticDataService {

	ContactStaticVo getStatic(long contactId) throws ApplicationException;

}
