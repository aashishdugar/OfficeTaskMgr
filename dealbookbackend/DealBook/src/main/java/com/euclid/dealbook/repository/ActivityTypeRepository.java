package com.euclid.dealbook.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.ActivityType;

@Repository
public interface ActivityTypeRepository extends JpaRepository<ActivityType, Long> {

	Optional<ActivityType> findByName(String name);
}
