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

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.exception.ValidationException;
import com.euclid.dealbook.types.ExcelSheetNames;

/**
 * The Class ContactExcelReader.
 */
public class ContactExcelReader extends GenericExcelReader {

	/**
	 * The Constant LOGGER.
	 */
	private static final Logger LOGGER = LoggerFactory.getLogger(ContactExcelReader.class);

	/**
	 * Verify heder.
	 *
	 * @param header the header
	 * @param sheet  the sheet
	 * @throws ApplicationException the application exception
	 */
	private void verifyHeder(List<String> header, Sheet sheet) throws ApplicationException {
		for (String columnName : header) {
			columnName = columnName.trim();
			ContactColumns col = ContactColumns.fromString(columnName.toUpperCase());
			if (null == col) {
				throw new ApplicationException(
						"Unknown Column Name '" + columnName + "' on Sheet " + sheet.getSheetName());
			}
		}
	}

	/**
	 * Get Method for contact data.
	 *
	 * @param contenent the contenent
	 * @return the contact data
	 * @throws ApplicationException the application exception
	 * @throws ValidationException  the validation exception
	 * @PTS Gets the customer data.
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private ContactData getContactData(HashMap<Integer, List<String>> contenent)
			throws ApplicationException, ValidationException {
		ContactData data = new ContactData();
		if (null == contenent || contenent.isEmpty()) {
			return data;
		}
		Iterator it = contenent.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry entry = (Map.Entry) it.next();
			ContactRowData rowData = new ContactRowData();
			List<String> row = (List<String>) entry.getValue();
			for (String colStr : row) {
				LOGGER.debug(colStr + "###########");
				String[] nameValue = colStr.split(GenericExcelReader.NAMEVALUESEPRATOR);
				if (nameValue.length == 1) {
					String[] temp = new String[2];
					temp[0] = nameValue[0];
					temp[1] = "";
					nameValue = temp;

				} else if (nameValue.length != 2) {
					throw new ApplicationException("Incorrect Data '" + colStr + "' on row " + entry.getValue());
				}
				if (EXCELROW.equalsIgnoreCase(nameValue[0])) {
					rowData.setRownumber(nameValue[1]);
					continue;
				}
				if (EXCELSHEET.equalsIgnoreCase(nameValue[0])) {
					rowData.setSheetname(nameValue[1]);
					continue;
				}
				ContactColumns col = ContactColumns.fromString(nameValue[0].toUpperCase());

				if (ContactColumns.SALUTATION == col) {
					rowData.setSalutation(nameValue[1]);
				} else if (ContactColumns.NAME == col) {
					rowData.setName(nameValue[1]);
				} else if (ContactColumns.DOB == col) {
					rowData.setDob(nameValue[1]);
				} else if (ContactColumns.EMAIL == col) {
					rowData.setEmail(nameValue[1]);
				} else if (ContactColumns.MOBILE == col) {
					rowData.setMobile(nameValue[1]);
				} else if (ContactColumns.DESIGNATION == col) {
					rowData.setDesignation(nameValue[1]);
				} else if (ContactColumns.ISACTIVE == col) {
					rowData.setIsActive(nameValue[1]);
				} else if (ContactColumns.ISUSER == col) {
					rowData.setIsUser(nameValue[1]);
				} else if (ContactColumns.ROLE == col) {
					rowData.setRole(nameValue[1]);
				} else if (ContactColumns.CONTACTORG == col) {
					rowData.setContactOrg(nameValue[1]);
				} else if (ContactColumns.REPORTINGTOEMAILS == col) {
					rowData.setReportingtoEmail(nameValue[1]);
				} else if (ContactColumns.REPORTINGTO == col) {
					rowData.setReportingTo(nameValue[1]);
				} else if (ContactColumns.CONTACTTYPE == col) {
					rowData.setContactType(nameValue[1]);
				} else if (ContactColumns.COUNTRY == col) {
					rowData.setCountry(nameValue[1]);
				} else if (ContactColumns.STATE == col) {
					rowData.setState(nameValue[1]);
				} else if (ContactColumns.LINE == col) {
					rowData.setLine(nameValue[1]);
				} else if (ContactColumns.CITY == col) {
					rowData.setCity(nameValue[1]);
				} else if (ContactColumns.ZIPCODE == col) {
					rowData.setZipCode(nameValue[1]);
				} else if (ContactColumns.CONTACTOWNEREMAIL == col) {
					rowData.setContactOwnerEmail(nameValue[1]);
				} else if (ContactColumns.CONTACTOWNER == col) {
					rowData.setContactOwner(nameValue[1]);
				}
			}
			ContactExcelValidator.validate(rowData);
			data.getRows().add(rowData);
			LOGGER.debug("Done");
		}
		return data;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.pts.excel.reader.GenericExcelReader#readValueAsPerData(org.apache.poi.ss.
	 * usermodel.Cell, String)
	 */
	@Override
	String readValueAsPerData(Cell cell, String header) throws ApplicationException {
		ContactColumns column = ContactColumns.fromString(header);
		ContactColumnType columnType = ContactColumnType.byString(column.toString());
		String dataType = columnType.getValue();
		dataType = dataType.toUpperCase().trim();
		return readCellValue(cell, dataType);
	}

	/**
	 * Get Method for contact.
	 *
	 * @param data the data
	 * @return the contact
	 * @throws ApplicationException the application exception
	 * @throws ValidationException  the validation exception
	 * @PTS Gets the contact.
	 */
	public List<ImpContact> getContact(byte[] data) throws ApplicationException, ValidationException {
		Workbook workbook = getWorkBook(data);
		Sheet sheet = getSheet(workbook, ExcelSheetNames.CONTACT.getValue());
		List<String> header = getHeder(sheet);
		verifyHeder(header, sheet);
		HashMap<Integer, List<String>> content = getContenent(sheet, header);
		ContactData contactData = getContactData(content);
		return DataToContactMapper.mapContactData(contactData);
	}
}
