package com.euclid.dealbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.UserWidgetView;

@Repository
public interface UserWidgetViewRepository extends JpaRepository<UserWidgetView, Long> {

}
