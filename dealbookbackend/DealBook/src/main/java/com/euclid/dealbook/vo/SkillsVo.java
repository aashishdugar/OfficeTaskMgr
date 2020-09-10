package com.euclid.dealbook.vo;

import java.io.Serializable;

public class SkillsVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String skillName;
	private String yearsOfExp;
	private Integer competencyLevel;
	private ConsultantVo consultant;

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
	public ConsultantVo getConsultant() {
		return consultant;
	}

	/**
	 * @param consultant the consultant to set
	 */
	public void setConsultant(ConsultantVo consultant) {
		this.consultant = consultant;
	}

}
