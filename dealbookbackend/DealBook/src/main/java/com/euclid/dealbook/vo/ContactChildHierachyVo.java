package com.euclid.dealbook.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ContactChildHierachyVo implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;
	private Long id;
	private Long parentContactId;
	private String title;
	private int callCount;
	private int emailCount;
	private int meetingCount;
	private int textCount;
	private List<ContactChildHierachyVo> children = new ArrayList<>();

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
	 * @return the parentContactId
	 */
	public Long getParentContactId() {
		return parentContactId;
	}

	/**
	 * @param parentContactId the parentContactId to set
	 */
	public void setParentContactId(Long parentContactId) {
		this.parentContactId = parentContactId;
	}

	/**
	 * @return the children
	 */
	public List<ContactChildHierachyVo> getChildren() {
		return children;
	}

	/**
	 * @param children the children to set
	 */
	public void setChildren(List<ContactChildHierachyVo> children) {
		this.children = children;
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
	 * @return the callCount
	 */
	public int getCallCount() {
		return callCount;
	}

	/**
	 * @param callCount the callCount to set
	 */
	public void setCallCount(int callCount) {
		this.callCount = callCount;
	}

	/**
	 * @return the emailCount
	 */
	public int getEmailCount() {
		return emailCount;
	}

	/**
	 * @param emailCount the emailCount to set
	 */
	public void setEmailCount(int emailCount) {
		this.emailCount = emailCount;
	}

	/**
	 * @return the meetingCount
	 */
	public int getMeetingCount() {
		return meetingCount;
	}

	/**
	 * @param meetingCount the meetingCount to set
	 */
	public void setMeetingCount(int meetingCount) {
		this.meetingCount = meetingCount;
	}

	/**
	 * @return the textCount
	 */
	public int getTextCount() {
		return textCount;
	}

	/**
	 * @param textCount the textCount to set
	 */
	public void setTextCount(int textCount) {
		this.textCount = textCount;
	}

}
