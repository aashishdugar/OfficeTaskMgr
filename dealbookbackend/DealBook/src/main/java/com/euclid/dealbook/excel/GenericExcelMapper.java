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

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import com.euclid.dealbook.exception.ApplicationException;

/**
 * The Class GenericExcelMapper.
 */
public class GenericExcelMapper {

	/**
	 * Trim.
	 *
	 * @param input the input
	 * @return the string
	 */
	public static String trim(String input) {
		if (null == input) {
			return "";
		}
		input = input.trim();
		if (input.equalsIgnoreCase("")) {
			input = null;
		}
		return input;
	}

	/**
	 * Get Method for date.
	 *
	 * @param fieldName the field name
	 * @param val       the val
	 * @return the date
	 * @throws ApplicationException the application exception
	 * @PTS Gets the date.
	 */
	public static Date getDate(String fieldName, String val) throws ApplicationException {

		if (null == val || val.isEmpty()) {
			throw new ApplicationException("'" + fieldName + "' Is Empty Or Null");
		}
		try {
			SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy", Locale.ENGLISH);
			return format.parse(val);
		} catch (ParseException e) {
			throw new ApplicationException(
					"Invalid Date format for field '" + fieldName + "', valid format is (dd-MM-yyyy");
		}
	}
}
