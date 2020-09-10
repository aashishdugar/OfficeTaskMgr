package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ContactDetailsView;

@Repository
public interface ContactDetailsViewRepository extends JpaRepository<ContactDetailsView, Long> {

	List<ContactDetailsView> findByIdIn(List<Long> ids);
}
