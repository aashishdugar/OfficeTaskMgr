package com.euclid.dealbook.utils;

import java.util.Comparator;

import com.euclid.dealbook.dao.Contact;

public class ContactComparater implements Comparator<Contact> {
	public int compare(Contact one, Contact two) {
//		if(null == one || null == one.getEmail()|| null == one.getReportingto() ||null == one.getReportingto().getEmail()) {
//			return 1;
//		}
//		
//		if(null == two || null == two.getEmail() || null == two.getReportingto() ||null == two.getReportingto().getEmail()) {
//			return -1;
//		}
		if (null != one.getReportingto()
				&& one.getReportingto().getEmail().trim().equalsIgnoreCase(two.getEmail().trim())) {
			return 1;
		} else if (null != two.getReportingto()
				&& two.getReportingto().getEmail().trim().equalsIgnoreCase(one.getEmail().trim())) {
			return -1;
		} else {
			return -1;
		}
//		return -1;
//		Contact oneParent=one.getReportingto();
//		Contact twoParent=two.getReportingto();
//		if(null == oneParent || null == oneParent.getEmail()) {
//			return 1;
//		}
//		
//		if(null == twoParent || null == twoParent.getEmail()) {
//			return 1;
//		}
//		if(oneParent.getEmail().trim().equalsIgnoreCase(two.getEmail().trim()) ) {
//			return 1;
//		}else if(twoParent.getEmail().trim().equalsIgnoreCase(one.getEmail().trim()) ) {
//			return -1;
//		}
//		return -1;
	}

}
