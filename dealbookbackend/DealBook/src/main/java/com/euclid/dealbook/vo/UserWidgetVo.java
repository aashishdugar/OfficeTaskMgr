package com.euclid.dealbook.vo;

import java.io.Serializable;

public class UserWidgetVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String title;
	private String criterias;
	private String query;
	private Double row;
	private Double col;
	private Double sizex;
	private Double sizey;
	private Boolean isStandard;
	private WidgetTypeVo type;
	private ContactVo owner;

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
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the criterias
	 */
	public String getCriterias() {
		return criterias;
	}

	/**
	 * @param criterias the criterias to set
	 */
	public void setCriterias(String criterias) {
		this.criterias = criterias;
	}

	/**
	 * @return the query
	 */
	public String getQuery() {
		return query;
	}

	/**
	 * @param query the query to set
	 */
	public void setQuery(String query) {
		this.query = query;
	}

	/**
	 * @return the row
	 */
	public Double getRow() {
		return row;
	}

	/**
	 * @param row the row to set
	 */
	public void setRow(Double row) {
		this.row = row;
	}

	/**
	 * @return the col
	 */
	public Double getCol() {
		return col;
	}

	/**
	 * @param col the col to set
	 */
	public void setCol(Double col) {
		this.col = col;
	}

	/**
	 * @return the sizex
	 */
	public Double getSizex() {
		return sizex;
	}

	/**
	 * @param sizex the sizex to set
	 */
	public void setSizex(Double sizex) {
		this.sizex = sizex;
	}

	/**
	 * @return the sizey
	 */
	public Double getSizey() {
		return sizey;
	}

	/**
	 * @param sizey the sizey to set
	 */
	public void setSizey(Double sizey) {
		this.sizey = sizey;
	}

	/**
	 * @return the isStandard
	 */
	public Boolean getIsStandard() {
		return isStandard;
	}

	/**
	 * @param isStandard the isStandard to set
	 */
	public void setIsStandard(Boolean isStandard) {
		this.isStandard = isStandard;
	}

	/**
	 * @return the type
	 */
	public WidgetTypeVo getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(WidgetTypeVo type) {
		this.type = type;
	}

	/**
	 * @return the owner
	 */
	public ContactVo getOwner() {
		return owner;
	}

	/**
	 * @param owner the owner to set
	 */
	public void setOwner(ContactVo owner) {
		this.owner = owner;
	}

}
