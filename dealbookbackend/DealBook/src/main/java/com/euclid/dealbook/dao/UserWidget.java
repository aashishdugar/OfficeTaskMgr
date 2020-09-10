package com.euclid.dealbook.dao;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "userwidget")
public class UserWidget implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "title")
	private String title;

	@Column(name = "widgetquery")
	private String query;

	@Column(name = "posrow")
	private Double posRow;

	@Column(name = "poscol")
	private Double posCol;

	@Column(name = "sizex")
	private Double sizex;

	@Column(name = "sizey")
	private Double sizey;

	@Column(name = "isstandard")
	private Boolean isStandard;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "type")
	private WidgetType type;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "owner")
	private Contact owner;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "criteria")
	private CriteriaEntity criteriaEntity;

	@OneToMany(mappedBy = "userWidget", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<WidgetFilter> widgetFilterList = new HashSet<>();

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
	 * @return the posRow
	 */
	public Double getPosRow() {
		return posRow;
	}

	/**
	 * @param posRow the posRow to set
	 */
	public void setPosRow(Double posRow) {
		this.posRow = posRow;
	}

	/**
	 * @return the posCol
	 */
	public Double getPosCol() {
		return posCol;
	}

	/**
	 * @param posCol the posCol to set
	 */
	public void setPosCol(Double posCol) {
		this.posCol = posCol;
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
	public WidgetType getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(WidgetType type) {
		this.type = type;
	}

	/**
	 * @return the owner
	 */
	public Contact getOwner() {
		return owner;
	}

	/**
	 * @param owner the owner to set
	 */
	public void setOwner(Contact owner) {
		this.owner = owner;
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

	/**
	 * @return the widgetFilterList
	 */
	public Set<WidgetFilter> getWidgetFilterList() {
		return widgetFilterList;
	}

	/**
	 * @param widgetFilterList the widgetFilterList to set
	 */
	public void setWidgetFilterList(Set<WidgetFilter> widgetFilterList) {
		this.widgetFilterList = widgetFilterList;
	}

}
