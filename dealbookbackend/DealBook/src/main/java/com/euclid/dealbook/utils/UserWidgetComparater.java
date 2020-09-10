package com.euclid.dealbook.utils;

import java.util.Comparator;

import com.euclid.dealbook.dao.UserWidget;

public class UserWidgetComparater implements Comparator<UserWidget> {

	private final boolean trueLow;

	public UserWidgetComparater(boolean trueLow) {
		this.trueLow = trueLow;
	}

	@Override
	public int compare(UserWidget o1, UserWidget o2) {
		// TODO Auto-generated method stub
		return (o1.getIsStandard() ^ o2.getIsStandard()) ? ((o1.getIsStandard() ^ this.trueLow) ? 1 : -1) : 0;
	}

}