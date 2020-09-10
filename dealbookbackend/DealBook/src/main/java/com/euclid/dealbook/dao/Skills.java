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
@Table(name = "skills")
public class Skills implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "skillname")
	private String skillName;

	@Column(name = "yearsofexp")
	private String yearsOfExp;

	@Column(name = "competencylevel")
	private Integer competencyLevel;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "consultant")
	private Consultant consultant;

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
	 * @return the skillName
	 */
	public String getSkillName() {
		return skillName;
	}

	/**
	 * @param skillName the skillName to set
	 */
	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	/**
	 * @return the yearsOfExp
	 */
	public String getYearsOfExp() {
		return yearsOfExp;
	}

	/**
	 * @param yearsOfExp the yearsOfExp to set
	 */
	public void setYearsOfExp(String yearsOfExp) {
		this.yearsOfExp = yearsOfExp;
	}

	/**
	 * @return the competencyLevel
	 */
	public Integer getCompetencyLevel() {
		return competencyLevel;
	}

	/**
	 * @param competencyLevel the competencyLevel to set
	 */
	public void setCompetencyLevel(Integer competencyLevel) {
		this.competencyLevel = competencyLevel;
	}

	/**
	 * @return the consultant
	 */
	public Consultant getConsultant() {
		return consultant;
	}

	/**
	 * @param consultant the consultant to set
	 */
	public void setConsultant(Consultant consultant) {
		this.consultant = consultant;
	}

}
