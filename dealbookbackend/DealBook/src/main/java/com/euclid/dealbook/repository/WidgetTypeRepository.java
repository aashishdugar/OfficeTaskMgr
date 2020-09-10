package com.euclid.dealbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.WidgetType;

@Repository
public interface WidgetTypeRepository extends JpaRepository<WidgetType, Long> {

}
