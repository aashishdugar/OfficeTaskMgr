package com.euclid.dealbook.dao;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "filterby")
public class FilterBy implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "name")
	private String name;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "criteria")
	private CriteriaEntity criteriaEntity;

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the criteriaEntity
	 */
	public CriteriaEntity getCriteriaEntity() {
		return criteriaEntity;
	}

	/**
	 * @param criteriaEntity the criteriaEntity to set
	 */
	public void setCriteriaEntity(CriteriaEntity criteriaEntity) {
		this.criteriaEntity = criteriaEntity;
	}

}
