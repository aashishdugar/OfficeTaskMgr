package com.euclid.dealbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.CriteriaEntity;

@Repository
public interface CriteriaEntityRepository extends JpaRepository<CriteriaEntity, Long> {

}
