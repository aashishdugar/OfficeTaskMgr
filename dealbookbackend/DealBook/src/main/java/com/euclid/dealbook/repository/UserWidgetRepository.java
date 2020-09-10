package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.UserWidget;

@Repository
public interface UserWidgetRepository extends JpaRepository<UserWidget, Long> {

	List<UserWidget> findByOwnerOrderByIdDesc(Contact contact);

	@Query("FROM UserWidget u where u.isStandard=:isStandard")
	List<UserWidget> getStandardUserWidget(@Param("isStandard") Boolean isStandard);

	List<UserWidget> findByOwnerOrIsStandardOrderByIdDesc(Contact contact, Boolean isStandard);

}
