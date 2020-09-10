package com.euclid.dealbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {

}
