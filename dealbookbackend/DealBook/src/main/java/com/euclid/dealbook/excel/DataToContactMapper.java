/*
 * Copyright (c) 2015, 2018, Proto Technology Solutions. All rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Redistribution and use in source and binary forms, without approval
 * not permitted. License details information applicable to this source 
 * code is available at
 * http://www.prototsolutions.com/licenses/LICENSE-1.0
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package com.euclid.dealbook.excel;

import java.util.ArrayList;
import java.util.List;

/**
 * The Class DataToContactMapper.
 */
public class DataToContactMapper extends GenericExcelMapper {

	/**
	 * Instantiates a new data to contact mapper.
	 *
	 * @PTS Instantiates a new data to contact mapper.
	 */
	private DataToContactMapper() {
	}

	/**
	 * Trim values.
	 *
	 * @param row the row
	 */
	private static void trimValues(ContactRowData row) {
		if (null != row.getRownumber()) {
			row.setRownumber(trim(row.getRownumber()));
		}
		if (null != row.getSheetname()) {
			row.setSheetname(trim(row.getSheetname()));
		}
		if (null != row.getSalutation()) {
			row.setSalutation(trim(row.getSalutation()));
		}
		if (null != row.getName()) {
			row.setName(trim(row.getName()));
		}
		if (null != row.getDob()) {
			row.setDob(trim(row.getDob()));
		}
		if (null != row.getEmail()) {
			row.setEmail(trim(row.getEmail()));
		}
		if (null != row.getMobile()) {
			row.setMobile(trim(row.getMobile()));
		}
		if (null != row.getDesignation()) {
			row.setDesignation(trim(row.getDesignation()));
		}
		if (null != row.getIsActive()) {
			row.setIsActive(trim(row.getIsActive()));
		}
		if (null != row.getIsUser()) {
			row.setIsUser(trim(row.getIsUser()));
		}
		if (null != row.getRole()) {
			row.setRole(trim(row.getRole()));
		}
		if (null != row.getContactOrg()) {
			row.setContactOrg(trim(row.getContactOrg()));
		}
		if (null != row.getReportingtoEmail()) {
			row.setReportingtoEmail(trim(row.getReportingtoEmail()));
		}
		if (null != row.getReportingTo()) {
			row.setReportingTo(trim(row.getReportingTo()));
		}
		if (null != row.getContactType()) {
			row.setContactType(trim(row.getContactType()));
		}
		if (null != row.getCountry()) {
			row.setCountry(trim(row.getCountry()));
		}
		if (null != row.getState()) {
			row.setState(trim(row.getState()));
		}
		if (null != row.getLine()) {
			row.setLine(trim(row.getLine()));
		}
		if (null != row.getCity()) {
			row.setCity(trim(row.getCity()));
		}
		if (null != row.getZipCode()) {
			row.setZipCode(trim(row.getZipCode()));
		}
		if (null != row.getContactOwner()) {
			row.setContactOwner(trim(row.getContactOwner()));
		}
		if (null != row.getContactOwnerEmail()) {
			row.setContactOwnerEmail(trim(row.getContactOwnerEmail()));
		}

	}

	/**
	 * Map customer data.
	 *
	 * @param customerData the customer data
	 * @return the list
	 */
	public static List<ImpContact> mapContactData(ContactData customerData) {
		if (null == customerData || null == customerData.getRows() || customerData.getRows().isEmpty()) {
			return new ArrayList<>();
		}
		List<ContactRowData> rows = customerData.getRows();
		List<ImpContact> contactMap = new ArrayList<>();
		for (ContactRowData row : rows) {
			trimValues(row);
			ImpContact impContact = new ImpContact();
			impContact.setSalutation(row.getSalutation());
			impContact.setName(row.getName());
			impContact.setDob(row.getDob());
			impContact.setEmail(row.getEmail());
			impContact.setMobile(row.getMobile());
			impContact.setDesignation(row.getDesignation());
			impContact.setIsActive(row.getIsActive());
			impContact.setIsUser(row.getIsUser());
			impContact.setRole(row.getRole());
			impContact.setContactOrg(row.getContactOrg());
			impContact.setReportingtoEmail(row.getReportingtoEmail());
			impContact.setReportingTo(row.getReportingTo());
			impContact.setContactType(row.getContactType());
			impContact.setCountry(row.getCountry());
			impContact.setState(row.getState());
			impContact.setLine(row.getLine());
			impContact.setCity(row.getCity());
			impContact.setZipCode(row.getZipCode());
			impContact.setContactOwnerEmail(row.getContactOwnerEmail());
			impContact.setContactOwner(row.getContactOwner());
			contactMap.add(impContact);
		}
		return contactMap;
	}
}
