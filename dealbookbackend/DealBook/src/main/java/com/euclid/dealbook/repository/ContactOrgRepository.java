package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ContactOrg;

@Repository
public interface ContactOrgRepository extends JpaRepository<ContactOrg, Long> {

	List<ContactOrg> findByName(String name);

	List<ContactOrg> findByNameAndIdNotIn(String name, Long id);

}
