package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

	@Query("SELECT DISTINCT a.city FROM Address a WHERE a.city IS NOT NULL and a.city IS NOT EMPTY")
	List<String> findDistinctCity();

	List<Address> findByCity(String city);

}
