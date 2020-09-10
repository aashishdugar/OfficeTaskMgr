package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Country;
import com.euclid.dealbook.dao.State;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {

	List<State> findByName(String name);

	List<State> findByCountry(Country country);

}
