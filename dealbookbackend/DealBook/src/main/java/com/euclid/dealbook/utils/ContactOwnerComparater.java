package com.euclid.dealbook.utils;

import java.util.Comparator;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactOrg;

public class ContactOwnerComparater implements Comparator<Contact> {
	public int compare(Contact one, Contact two) {
		ContactOrg contactOrg = one.getContactorg();
		ContactOrg contact2Org = two.getContactorg();
		if (null == contactOrg) {
			return -1;
		}
		if (contactOrg.getName().trim().equalsIgnoreCase(contact2Org.getName().trim())) {
			return 1;
		} else {
			return -1;
		}
	}

}
