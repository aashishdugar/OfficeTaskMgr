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
@Table(name = "userwidget")
public class UserWidgetView implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "title")
	private String title;

	@Column(name = "criterias")
	private String criterias;

	@Column(name = "widgetquery")
	private String query;

	@Column(name = "isstandard")
	private Boolean isStandard;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "type")
	private WidgetType type;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "owner")
	private ContactDetailsView owner;

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
	public ContactDetailsView getOwner() {
		return owner;
	}

	/**
	 * @param owner the owner to set
	 */
	public void setOwner(ContactDetailsView owner) {
		this.owner = owner;
	}

}
