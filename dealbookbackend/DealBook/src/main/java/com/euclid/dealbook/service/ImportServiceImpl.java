package com.euclid.dealbook.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.Format;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Objects;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.euclid.dealbook.bean.ImportBean;
import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.Address;
import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.dao.ContactOrg;
import com.euclid.dealbook.dao.ContactType;
import com.euclid.dealbook.dao.Country;
import com.euclid.dealbook.dao.Role;
import com.euclid.dealbook.dao.State;
import com.euclid.dealbook.excel.ActivityExcelReader;
import com.euclid.dealbook.excel.ImpActivity;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.exception.ValidationException;
import com.euclid.dealbook.utils.ContactComparater;
import com.euclid.dealbook.utils.ContactOwnerComparater;
import com.euclid.dealbook.validator.ContactValidator;

@Service
public class ImportServiceImpl implements ImportService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ImportServiceImpl.class);
	private static final String IMPORT_SHEET_NAME = "Contact";

	@Autowired
	private ImportBean importBean;

	@Autowired
	private ActivityExcelReader activityExcelReader;

	@Autowired
	private ContactServiceImp contactServiceImp;

	@Override
	public List<Contact> importContacts(MultipartFile file) throws ApplicationException {
		try {
			LOGGER.debug("importing Contacts");
			if (null == file) {
				throw new ApplicationException("Invalid input file");
			}
			List<Contact> contactList = null;

			LOGGER.debug("WorkBook Create Started");
			Workbook workbook = WorkbookFactory.create(file.getInputStream());
			LOGGER.debug("WorkBook Create");

			Sheet sheet = workbook.getSheet(IMPORT_SHEET_NAME);
			contactList = validateAndGetListOfContacts(sheet);
			LOGGER.debug("ContactList" + contactList);
			for (Contact con : contactList) {
				LOGGER.debug("1:" + con);
			}
			Collections.sort(contactList, new ContactOwnerComparater());
			for (Contact con : contactList) {
				LOGGER.debug("2:" + con);
			}
			Collections.sort(contactList, new ContactComparater());
			for (Contact con : contactList) {
				LOGGER.debug("3:" + con);
			}
			List<Contact> importedContactList = importBean.importContacts(contactList);
			for (Contact contact : importedContactList) {
				removeJsonIssue(contact);

			}
			return importedContactList;
		} catch (EncryptedDocumentException | IOException | ValidationException e) {
			e.printStackTrace();
			throw new ApplicationException(e.getMessage());

		}
	}

	@Override
	public List<Contact> importContacts(File file) throws ApplicationException {
		LOGGER.debug("importing Contacts");
		if (null == file) {
			throw new ApplicationException("Invalid input file");
		}

		List<Contact> contactList = null;
		try {
			FileInputStream inputStream = new FileInputStream(file);
			LOGGER.debug("WorkBook Create Started");
			Workbook workbook = WorkbookFactory.create(inputStream);
			LOGGER.debug("WorkBook Create");

			Sheet sheet = workbook.getSheet(IMPORT_SHEET_NAME);
			contactList = validateAndGetListOfContacts(sheet);
			LOGGER.debug("ContactList" + contactList.size());
			for (Contact con : contactList) {
				LOGGER.debug("1:" + con);
			}
			Collections.sort(contactList, new ContactComparater());
			int i = 1;
			for (Contact con : contactList) {
				if (i % 10 == 0) {
					LOGGER.debug(i + ":" + con);
				}
				LOGGER.debug(i + ":" + con);
				i++;
			}
			List<Contact> importedContactList = importBean.importContacts(contactList);
			for (Contact contact : importedContactList) {
				removeJsonIssue(contact);

			}
			return importedContactList;
		} catch (EncryptedDocumentException | IOException | ValidationException e) {
			e.printStackTrace();
			throw new ApplicationException(e.getMessage());

		}
	}

	public void removeJsonIssue(Contact contactObj) {
		if (null == contactObj) {
			return;
		}
		contactObj.setActivities(null);
		if (null != contactObj.getContactOwner()) {
			contactObj.getContactOwner().setActivities(null);
			contactObj.getContactOwner().setContactOwner(null);
			contactObj.getContactOwner().setReportingto(null);
		}
		if (null != contactObj.getReportingto()) {
			contactObj.getReportingto().setActivities(null);
			contactObj.getReportingto().setContactOwner(null);
			contactObj.getReportingto().setReportingto(null);

		}
	}

	/**
	 * Validates the contacts present in the sheet. If informations for all the
	 * contacts are valid then it will return list of Contact object. In case if any
	 * one contact information is not valid, this method immediately throws
	 * exception.
	 * 
	 * @param sheet : {@link Sheet} object to get the data and populate it in the
	 *              contacts.
	 * @throws ApplicationException
	 * @throws ValidationException
	 */
	private List<Contact> validateAndGetListOfContacts(Sheet sheet) throws ApplicationException, ValidationException {
		try {
			List<Contact> contacts = new ArrayList<>();
			if (sheet != null) {
				for (int rowNum = 1; rowNum <= sheet.getLastRowNum(); rowNum++) {
					Row row = sheet.getRow(rowNum);
					Contact contact = createContact(row);
					ContactValidator.validateContactForImport(contact);
					contacts.add(contact);
				}
			}
			return contacts;
		} catch (ApplicationException e) {
			throw new ApplicationException(e.getMessage());
		}
	}

	/**
	 * Creates the {@linkplain Contact} object by reading the date present in the
	 * given row.<br>
	 * Here each cell in a row will always contain same information. If any time you
	 * information changes then it will break.
	 * 
	 * @param row contains informations to create contact object.
	 * @return Contact
	 * @throws ApplicationException
	 */
	private Contact createContact(Row row) throws ApplicationException {
		Contact contact = new Contact();
		try {
			if ((row.getRowNum() + 1) == 38) {
				LOGGER.debug("Checking");
			}
			contact.setSalutation(getCellValue(row, 0));
			contact.setName(getCellValue(row, 1));
			contact.setDob(getCellValue(row, 2));
			contact.setEmail(getCellValue(row, 3));
			contact.setMobile(getCellValue(row, 4) == null ? "" : getCellValue(row, 4).toString());
			contact.setDesignation(getCellValue(row, 5));
			String isActive = getCellValue(row, 6);
			/*
			 * Setting isActive true if user does not define value for that in the file.
			 **/
			if (isActive == null || isActive.isEmpty()) {
				isActive = "Yes";
			}
			contact.setIsActive(getBooleanValue(isActive));
			contact.setIsUser(getBooleanValue(getCellValue(row, 7)));

			String roleName = getCellValue(row, 8);
			if (roleName != null && !roleName.isEmpty()) {
				Role role = new Role();
				role.setName(roleName);
				contact.setRole(role);
			}

			ContactOrg contactOrg = new ContactOrg();
			contactOrg.setName(getCellValue(row, 9));
			contact.setContactorg(contactOrg);

			String email = getCellValue(row, 10);
			if (email != null && !email.isEmpty()) {

				Contact reportingTo = new Contact();
				reportingTo.setEmail(email);
				contact.setReportingto(reportingTo);
			}

			ContactType contactType = new ContactType();
			contactType.setName(getCellValue(row, 11));
			contact.setContactType(contactType);

			Address address = createAddressObj(getCellValue(row, 12), getCellValue(row, 13), getCellValue(row, 14),
					getCellValue(row, 15), getCellValue(row, 16).toString());
			contact.setAddress(address);
			String contctOwnerEmail = getCellValue(row, 17);
			if (contctOwnerEmail != null && !contctOwnerEmail.isEmpty()) {

				Contact contactOwner = new Contact();
				contactOwner.setEmail(contctOwnerEmail);
				contact.setContactOwner(contactOwner);
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException(String.format("Not able to create Contact object for row number %s",
					row.getRowNum() + 1, e.getMessage()));
		}
		LOGGER.debug("" + (row.getRowNum() + 1) + "::" + contact);
		contact.trim();
		return contact;
	}

	private Address createAddressObj(String country, String stateStr, String line, String city, String zip) {

		if (StringUtils.isEmpty(stateStr) && StringUtils.isEmpty(line) && StringUtils.isEmpty(city)
				&& StringUtils.isEmpty(zip)) {
			return null;
		}
		Address address = new Address();
		Country countryObj = null;
		State state = null;
		if (Objects.nonNull(country)) {

			countryObj = new Country();
			countryObj.setName(country);
		}
		if (Objects.nonNull(countryObj) || Objects.nonNull(stateStr)) {
			state = new State();
			state.setName(stateStr);
			state.setCountry(countryObj);
		}
		address.setState(state);
		address.setLine(line);
		address.setCity(city);
		address.setZipCode(zip);
		return address;
	}

	@SuppressWarnings("unchecked")
	private <T> T getCellValue(Row row, int cellnum) {

		Cell cell = row.getCell(cellnum);
		if (cell != null) {

			CellType type = cell.getCellType();
			if (CellType.STRING == type) {
				return (T) cell.getStringCellValue();
			} else if (DateUtil.isCellDateFormatted(cell)) {
				return (T) cell.getDateCellValue();
			} else if (CellType.NUMERIC == type) {

				DataFormatter dataFormatter = new DataFormatter(Locale.US);
				Format format = dataFormatter.createFormat(cell);
				return (T) format.format(cell.getNumericCellValue());

			}
		}
		return null;
	}

	private Boolean getBooleanValue(String value) {
		return "Yes".equalsIgnoreCase(value) ? Boolean.TRUE : Boolean.FALSE;
	}

	@Override
	public List<Activity> importActivities(MultipartFile file) throws ApplicationException {
		try {
			LOGGER.debug("Import Activities");
			List<ImpActivity> activityList = activityExcelReader.getActivities(file);
			List<Activity> savedActivityList = importBean.importActivities(activityList);
			for (Activity activity : savedActivityList) {
				removeJsonIssue(activity);
			}
			return savedActivityList;
		} catch (ApplicationException e) {
			throw new ApplicationException(e.getMessage());
		}
	}

	public void removeJsonIssue(Activity activity) {
		if (null == activity) {
			return;
		}

		contactServiceImp.removeJsonIssue(activity.getContact());
		if (null != activity.getParent()) {
			contactServiceImp.removeJsonIssue(activity.getParent().getContact());
		}

	}
}
