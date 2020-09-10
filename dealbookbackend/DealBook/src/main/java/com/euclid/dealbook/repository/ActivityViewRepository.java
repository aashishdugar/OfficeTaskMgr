package com.euclid.dealbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ActivityView;

@Repository
public interface ActivityViewRepository extends JpaRepository<ActivityView, Long> {

}
