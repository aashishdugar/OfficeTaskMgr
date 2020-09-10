package com.euclid.dealbook.bean;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.repository.RoleRepository;

@Repository
public class RoleBeanImpl implements RoleBean {

	private static final Logger LOGGER = LoggerFactory.getLogger(RoleBeanImpl.class);

	@Autowired
	private RoleRepository roleRepository;

	/**
	 * Method to Get Role List details.
	 * 
	 * @return Get Role List
	 */
	@Override
	public List<Role> getall() {
		LOGGER.debug("Getting List of all Role");
		return (List<Role>) roleRepository.findAll();

	}

	/**
	 * Method to Get Role details.
	 * 
	 * @param Role Id
	 * @return Role
	 * @throws ApplicationException
	 */
	@Override
	public Role get(long roleId) throws ApplicationException {
		try {
			LOGGER.debug("Get Role details of - " + roleId + " Started");
			Optional<Role> roleOptional = roleRepository.findById(roleId);
			if (!roleOptional.isPresent()) {
				throw new ApplicationException("Role Not Found for Id " + roleId);
			}
			Role roleObj = roleOptional.get();
			return roleObj;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}

	/**
	 * Method to Get Role details Using Name.
	 * 
	 * @param Role Name
	 * @return RoleList
	 * @throws ApplicationException
	 */
	@Override
	public List<Role> findByName(String name) throws ApplicationException {
		try {
			LOGGER.debug("Get Role details of - " + name + " Started");
			List<Role> roleList = roleRepository.findByName(name);
			if (roleList.isEmpty()) {
				throw new ApplicationException("Role Not Found for Name " + name);
			}
			return roleList;
		} catch (Exception e) {
			throw new ApplicationException(e.getLocalizedMessage());
		}
	}
}
