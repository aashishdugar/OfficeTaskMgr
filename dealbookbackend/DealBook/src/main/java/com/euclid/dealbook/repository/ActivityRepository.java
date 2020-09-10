package com.euclid.dealbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.euclid.dealbook.dao.Activity;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
	List<Activity> findByparent(Activity activity);

	@Query("SELECT COUNT(c) FROM Activity c where c.type.name=:name and c.contact.id=:id")
	Integer countByActivityTypeAndContact(@Param("name") String name, @Param("id") Long id);

	@Query("SELECT DISTINCT a.updatedBy FROM Activity a where a.updatedBy is Not NULL")
	List<Long> getDistinctUpdatedBy();

	@Query("SELECT DISTINCT a.createdBy FROM Activity a where a.createdBy is Not NULL")
	List<Long> getDistinctCreatedBy();

}
