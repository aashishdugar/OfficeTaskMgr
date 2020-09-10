package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ContactType;

@Repository
public interface ContactTypeRepository extends JpaRepository<ContactType, Long> {

	List<ContactType> findByName(String name);
}
