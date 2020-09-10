package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ContactView;

@Repository
public interface ContactViewRepository extends JpaRepository<ContactView, Long> {

	List<ContactView> findAllByOrderByCreatedOnDesc();

}
