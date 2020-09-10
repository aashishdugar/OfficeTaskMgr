package com.euclid.dealbook.excel;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.text.MessageFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map.Entry;
import java.util.Objects;

import org.apache.commons.io.IOUtils;
import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.exception.ValidationException;
import com.euclid.dealbook.types.ExcelSheetNames;
import com.euclid.dealbook.validator.ImportValidator;

@Service
public class ActivityExcelReader extends GenericExcelReader {

	private static final Logger LOGGER = LoggerFactory.getLogger(ActivityExcelReader.class);

	@Override
	String readValueAsPerData(Cell cell, String header) throws ApplicationException {
		ActivityColumns column = ActivityColumns.fromString(header);
		ActivityColumnType columnType = ActivityColumnType.byString(column.toString());
		String dataType = columnType.getValue();
		dataType = dataType.toUpperCase().trim();
		return readCellValue(cell, dataType);
	}

	public List<ImpActivity> getActivities(File activityExcelFile) throws ApplicationException {

		try {
			byte[] byteArry = readData(new FileInputStream(activityExcelFile));
			Workbook workbook = getWorkBook(byteArry);
			Sheet sheet = getSheet(workbook, ExcelSheetNames.ACTIVITY.getValue());
			List<String> header = getHeder(sheet);
			verifyHeder(header, sheet);
			HashMap<Integer, List<String>> content = getContenent(sheet, header);
			return getContactData(content);
		} catch (ApplicationException | FileNotFoundException | ValidationException e) {
			throw new ApplicationException(e);
		}
	}

	public List<ImpActivity> getActivities(MultipartFile file) throws ApplicationException {

		try {
			Workbook workbook = WorkbookFactory.create(file.getInputStream());
			Sheet sheet = getSheet(workbook, ExcelSheetNames.ACTIVITY.getValue());
			List<String> header = getHeder(sheet);
			verifyHeder(header, sheet);
			HashMap<Integer, List<String>> content = getContenent(sheet, header);
			return getContactData(content);
		} catch (ApplicationException | ValidationException | EncryptedDocumentException | IOException e) {
			throw new ApplicationException(e);
		}
	}

	private void verifyHeder(List<String> header, Sheet sheet) throws ApplicationException {
		for (String columnName : header) {
			columnName = columnName.trim();
			ActivityColumns col = ActivityColumns.fromString(columnName.toUpperCase());
			if (null == col) {
				throw new ApplicationException(
						"Unknown Column Name '" + columnName + "' on Sheet " + sheet.getSheetName());
			}
		}
	}

	private List<ImpActivity> getContactData(HashMap<Integer, List<String>> contenent)
			throws ApplicationException, ValidationException {

		List<ImpActivity> importActivityList = new LinkedList<>();
		if (null == contenent || contenent.isEmpty()) {
			return importActivityList;
		}
		for (Entry<Integer, List<String>> entry : contenent.entrySet()) {

			ImpActivity impActivity = new ImpActivity();
			List<String> rows = entry.getValue();
			for (String colStr : rows) {

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
					continue;
				}
				if (EXCELSHEET.equalsIgnoreCase(nameValue[0])) {
					continue;
				}
				ActivityColumns col = ActivityColumns.fromString(nameValue[0].toUpperCase());

				if (ActivityColumns.ACTIVITY_NAME == col) {
					impActivity.setActivityName(nameValue[1]);
				} else if (ActivityColumns.COMMENTS == col) {
					impActivity.setComments(nameValue[1]);
				} else if (ActivityColumns.FOLLOW_UP_DATE == col) {
					impActivity.setFollowUpDate(convertStringToDate(nameValue[1]));
				} else if (ActivityColumns.CONTACT_EMAIL == col) {

					impActivity.setContactEmail(nameValue[1]);
				} else if (ActivityColumns.CONTACT_NAME == col) {
					impActivity.setContactName(nameValue[1]);
				} else if (ActivityColumns.ACTIVITY_TYPE == col) {
					impActivity.setActivityType(nameValue[1]);
				} else if (ActivityColumns.CREATED_BY == col) {
					impActivity.setCreatedBy(nameValue[1]);
				} else if (ActivityColumns.UPDATED_BY == col) {
					impActivity.setUpdatedBy(nameValue[1]);
				} else if (ActivityColumns.CREATED_DATE == col) {
					impActivity.setCreatedDate(convertStringToDate(nameValue[1]));
				} else if (ActivityColumns.UPDATED_DATE == col) {
					impActivity.setUpdatedDate(convertStringToDate(nameValue[1]));
				} else if (ActivityColumns.IS_ACTIVE == col) {

					String value = nameValue[1];
					if (value == null || value.trim().isEmpty()) {
						impActivity.setIsActive(Boolean.FALSE);
					} else {
						impActivity.setIsActive(getBoolean(value));
					}
				} else if (ActivityColumns.IS_PRIVATE == col) {
					impActivity.setIsPrivate(getBoolean(nameValue[1]));
				}
			}
			ImportValidator.validateActivityImport(impActivity);
			importActivityList.add(impActivity);
			LOGGER.debug("Done");
		}
		return importActivityList;
	}

	private Boolean getBoolean(String value) throws ApplicationException {

		if (null == value || value.trim().isEmpty() || "no".equalsIgnoreCase(value)) {
			return Boolean.FALSE;
		} else if ("yes".equalsIgnoreCase(value)) {
			return Boolean.TRUE;
		} else {
			throw new ApplicationException("Only ''Yes'' or ''No'' allowed.");
		}
	}

	private byte[] readData(InputStream inStream) throws ApplicationException {
		try {
			return IOUtils.toByteArray(inStream);

		} catch (Exception e) {
			throw new ApplicationException("fail to Read InputStream");
		}
	}

	/**
	 * Method to convert string formatted date to Date object. This method will use
	 * "yyyy-MM-dd'T'HH:mm:ss.SSSZ" pattern to convert string to date.
	 * 
	 * @param dateString
	 * @return
	 * @throws ApplicationException
	 */
	private Date convertStringToDate(String dateString) throws ApplicationException {

		if (Objects.nonNull(dateString) && !dateString.trim().isEmpty()) {
			String dateFormatPattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
			try {

				SimpleDateFormat formatter = new SimpleDateFormat(dateFormatPattern);
				return formatter.parse(dateString);
			} catch (ParseException e) {
				throw new ApplicationException(MessageFormat.format("Only format {0}  is accepted", dateFormatPattern));
			}
		}
		return null;
	}
}
