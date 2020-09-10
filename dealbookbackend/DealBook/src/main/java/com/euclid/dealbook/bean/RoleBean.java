package com.euclid.dealbook.bean;

import java.util.List;

import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.exception.ApplicationException;

public interface RoleBean {

	List<Role> getall() throws ApplicationException;

	Role get(long id) throws ApplicationException;

	List<Role> findByName(String name) throws ApplicationException;
}
