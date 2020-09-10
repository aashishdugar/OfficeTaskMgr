package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.CriteriaEntity;
import com.euclid.dealbook.dao.FilterBy;

@Repository
public interface FilterByRepository extends JpaRepository<FilterBy, Long> {

	List<FilterBy> findByCriteriaEntity(CriteriaEntity criteriaEntity);

}
