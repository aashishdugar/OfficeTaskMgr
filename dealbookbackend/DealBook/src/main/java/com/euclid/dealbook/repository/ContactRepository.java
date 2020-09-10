package com.euclid.dealbook.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.dao.ContactOrg;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

	@Query("From Contact c where lower(c.email)=lower(TRIM(:email))")
	List<Contact> findByEmail(@Param("email") String email);

	List<Contact> findByreportingto(Contact contact);

	List<Contact> findBycontactOwner(Contact contact);

	List<Contact> findByContactorgAndReportingto(ContactOrg contactorg, Contact reportingto);

	@Query("SELECT DISTINCT c.designation FROM Contact c where c.designation is Not NULL and c.designation IS NOT EMPTY")
	List<String> findDistinctDesignation();

	@Query("SELECT DISTINCT c.contactOwner FROM ContactView c where c.contactOrg.name=:name")
	List<ContactDetailsView> findAllContactOwner(@Param("name") String name);

	@Query("SELECT DISTINCT c.reportingto FROM ContactView c")
	List<ContactDetailsView> findAllReportingTo();

	Optional<Contact> findByEmailAndToken(String email, Integer token);

	List<Contact> findByName(String name);

	List<Contact> findByNameAndEmail(String name, String email);

	@Query("From Contact c where lower(c.email)=lower(TRIM(:email)) OR lower(c.name)=lower(TRIM(:name))")
	List<Contact> findByEmailName(@Param("name") String name, @Param("email") String email);

	List<Contact> findByEmailAndIdNotIn(String email, Long id);

	@Query("From Contact c where c.contactorg.id=:contactorg")
	List<Contact> findContactByContactOrg(@Param("contactorg") long contactorg);

}
