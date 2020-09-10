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

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.euclid.dealbook.exception.ApplicationException;

/**
 * The Class GenericExcelReader.
 */
public abstract class GenericExcelReader {

	/** The Constant NAMEVALUESEPRATOR. */
	public static final String NAMEVALUESEPRATOR = "!!!!!!!NVS!!!!!!!";

	/** The Constant EXCELROW. */
	public static final String EXCELROW = "excelrow";

	/** The Constant EXCELSHEET. */
	public static final String EXCELSHEET = "excelsheet";

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(GenericExcelReader.class);

	/**
	 * Gets the work book.
	 *
	 * @param fileName the file name
	 * @return the work book
	 * @throws ApplicationException the application exception
	 * @PTS Gets the work book.
	 */
	Workbook getWorkBook(String fileName) throws ApplicationException {
		try {
			File file = new File(fileName);
			if (!file.exists()) {
				throw new ApplicationException("File Does not Exists '" + fileName + "'");
			}
			return WorkbookFactory.create(new FileInputStream(file));
		} catch (Exception e) {
			throw new ApplicationException("Error While Reading file " + e);
		}
	}

	/**
	 * Gets the work book.
	 *
	 * @param data the data
	 * @return the work book
	 * @throws ApplicationException the application exception
	 * @PTS Gets the work book.
	 */
	Workbook getWorkBook(byte[] data) throws ApplicationException {
		try {
			if (null == data || data.length == 0) {
				throw new ApplicationException("Invalid or Empty Input Data");
			}
			InputStream inputStream = new ByteArrayInputStream(data);
			Workbook workbook = WorkbookFactory.create(inputStream);
			return workbook;
		} catch (Exception e) {
			throw new ApplicationException("Error While Reading file " + e);
		}
	}

	/**
	 * Gets the sheet.
	 *
	 * @param workbook  the workbook
	 * @param sheetname the sheetname
	 * @return the sheet
	 * @throws ApplicationException the application exception
	 * @PTS Gets the sheet.
	 */
	Sheet getSheet(Workbook workbook, String sheetname) throws ApplicationException {
		try {
			Iterator<Sheet> sheetIterator = workbook.sheetIterator();
			LOGGER.debug("Retrieving Sheets using Iterator");
			while (sheetIterator.hasNext()) {
				Sheet sheet = sheetIterator.next();
				LOGGER.debug("=> " + sheet.getSheetName());
				if (sheetname.equalsIgnoreCase(sheet.getSheetName())) {
					return sheet;
				}
			}
			throw new ApplicationException("Sheet With name '" + sheetname + "' Not Found in Workbook");
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException("Error While Reading file " + e);
		}

	}

	/**
	 * Gets the heder.
	 *
	 * @param sheet the sheet
	 * @return the heder
	 * @throws ApplicationException the application exception
	 * @PTS Gets the heder.
	 */
	@SuppressWarnings("deprecation")
	List<String> getHeder(Sheet sheet) throws ApplicationException {
		try {
			List<String> header = new ArrayList<>();

			/*
			 * 1. You can obtain a rowIterator and columnIterator and iterate over them
			 */
			LOGGER.debug("\n\nIterating over Rows and Columns using Iterator\n");
			Iterator<Row> rowIterator = sheet.rowIterator();
			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();
				if (isEmptyRow(row)) {
					continue;
				}
				/*
				 * Now let's iterate over the columns of the current row
				 */
				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					LOGGER.debug(cell.getCellTypeEnum().toString());
					if (!"STRING".equalsIgnoreCase(cell.getCellTypeEnum().toString())) {
						throw new ApplicationException(
								"Header Cell Must be Text sheet=" + sheet.getSheetName() + " Row=" + row.getRowNum());
					}
					String cellValue = readStringCell(cell);
					LOGGER.debug("Index=" + cell.getColumnIndex() + " Type=" + cell.getCellTypeEnum() + " " + cellValue
							+ "\t");
					cellValue = cellValue.trim();
					header.add(cellValue);
				}
				return header;
			}
			throw new ApplicationException("Workbook is Empty");
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException("Error While Reading file " + e);
		}
	}

	/**
	 * Checks if is integer.
	 *
	 * @param number the number
	 * @return true, if is integer
	 * @PTS Checks if is integer.
	 */
	public boolean isInteger(double number) {
		if (Math.ceil(number) == number) {
			LOGGER.debug(number + " is an integer");
			return true;
		}
		LOGGER.debug(number + " is not an integer");
		return false;
	}

	/**
	 * Round to double.
	 *
	 * @param value        the value
	 * @param decimalPlace the decimal place
	 * @return the double
	 */
	public static double roundToDouble(double value, int decimalPlace) {
		double scale = Math.pow(10, decimalPlace);
		return Math.round(value * scale) / scale;
	}

	/**
	 * Display contenent.
	 *
	 * @param mp the mp
	 */
	@SuppressWarnings("rawtypes")
	void displayContenent(HashMap<Integer, List<String>> mp) {
		Iterator it = mp.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry pair = (Map.Entry) it.next();
			LOGGER.debug(pair.getKey() + " = " + pair.getValue());

		}
	}

	/**
	 * Checks if is empty row.
	 *
	 * @param row the row
	 * @return true, if is empty row
	 * @throws ApplicationException the application exception
	 * @PTS Checks if is empty row.
	 */
	boolean isEmptyRow(Row row) throws ApplicationException {
		try {
			boolean flag = true;
			Iterator<Cell> cellIterator = row.cellIterator();
			DataFormatter dataFormatter = new DataFormatter();

			while (cellIterator.hasNext()) {
				Cell cell = cellIterator.next();
				String cellValue = dataFormatter.formatCellValue(cell);
				if (null == cellValue || cellValue.isEmpty()) {
					flag = true;
				} else {
					return false;
				}
				LOGGER.debug(cellValue + "\t");
			}
			return flag;
		} catch (Exception e) {
			throw new ApplicationException("Error While Reading Row " + e);
		}
	}

	/**
	 * Read string cell.
	 *
	 * @param cell the cell
	 * @return the string
	 */
	public String readStringCell(Cell cell) {
		LOGGER.debug(cell.getRichStringCellValue().getString());
		return cell.getRichStringCellValue().getString();
	}

	/**
	 * Read cell value.
	 *
	 * @param cell     the cell
	 * @param dataType the data type
	 * @return the string
	 * @throws ApplicationException the application exception
	 */
	public String readCellValue(Cell cell, String dataType) throws ApplicationException {
		if (null == cell || null == dataType) {
			return "";
		}
		dataType = dataType.toUpperCase().trim();
		switch (dataType) {
		case "GENERAL":
			DataFormatter fmt = new DataFormatter(true);
			String cellValue = fmt.formatCellValue(cell);
			return cellValue;
		case "DATE":
			Date date = cell.getDateCellValue();
			if (null == date) {
				return "";
			}
			SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
			String strDate = dateFormat.format(date);
			LOGGER.debug(strDate);
			return strDate;
		case "NUMBER":
			double numericValue = cell.getNumericCellValue();
			if (isInteger(numericValue)) {
				return "" + Math.ceil(numericValue);
			}
			numericValue = roundToDouble(numericValue, 3);
			return "" + numericValue;
		case "PERCENT":
			double percentValue = cell.getNumericCellValue();
			if (percentValue >= 0) {
				percentValue = percentValue * 100;
			}
			numericValue = roundToDouble(percentValue, 3);
			return "" + numericValue;
		default:
			throw new ApplicationException(" Unkown Data Type '" + dataType + "'");
		}
	}

	/**
	 * Read cell value.
	 *
	 * @param cell the cell
	 * @return the string
	 */
	@SuppressWarnings("deprecation")
	public String readCellValue(Cell cell) {
		if (null == cell) {
			return "";
		}
		switch (cell.getCellTypeEnum()) {
		case BOOLEAN:

			return "" + cell.getBooleanCellValue();
		case STRING:
			LOGGER.debug(cell.getRichStringCellValue().getString());
			return cell.getRichStringCellValue().getString();
		case NUMERIC:
			if (DateUtil.isCellDateFormatted(cell)) {

				Date date = cell.getDateCellValue();
				DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
				return df.format(date);
			}

			return "" + cell.getNumericCellValue();
		case FORMULA:
			LOGGER.debug(cell.getCellFormula());

			return "" + cell.getNumericCellValue();
		default:
			LOGGER.debug("");
			return "";
		}
	}

	/**
	 * Read value as per data.
	 *
	 * @param cell   the cell
	 * @param header the header
	 * @return the string
	 * @throws ApplicationException the application exception
	 */
	abstract String readValueAsPerData(Cell cell, String header) throws ApplicationException;

	/**
	 * Gets the contenent.
	 *
	 * @param sheet  the sheet
	 * @param header the header
	 * @return the contenent
	 * @throws ApplicationException the application exception
	 * @PTS Gets the contenent.
	 */
	HashMap<Integer, List<String>> getContenent(Sheet sheet, List<String> header) throws ApplicationException {
		try {
			HashMap<Integer, List<String>> content = new HashMap<>();

			LOGGER.debug("\n\nIterating over Rows and Columns using Iterator");
			Iterator<Row> rowIterator = sheet.rowIterator();
			int i = 0;
			boolean flag = true;
			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();
				if (row == null) {
					continue;
				}
				if (isEmptyRow(row)) {
					continue;
				}
				if (flag) {
					flag = false;
					continue;
				}
				int rowNumber = row.getRowNum();
				List<String> rowData = new ArrayList<>();
				int lastColumn = header.size();
				for (int cn = 0; cn < lastColumn; cn++) {
					Cell cell = row.getCell(cn);
					String cellValue = readValueAsPerData(cell, header.get(cn));
					rowData.add(header.get(cn) + NAMEVALUESEPRATOR + cellValue);
				}
				rowData.add(EXCELROW + NAMEVALUESEPRATOR + rowNumber);
				rowData.add(EXCELSHEET + NAMEVALUESEPRATOR + sheet.getSheetName());

				content.put(i++, rowData);
			}

			displayContenent(content);
			return content;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException("Error While Reading file " + e);
		}
	}

	/**
	 * Parses the double.
	 *
	 * @param value the value
	 * @return the double
	 */
	public static Double parseDouble(String value) {
		if (null == value || value.isEmpty()) {
			return null;
		}
		return Double.parseDouble(value);
	}
}
