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

/**
 * The Enum ContactColumns.
 */
public enum ContactColumns {

	/**
	 * The salutation.
	 */
	SALUTATION("SALUTATION"),
	/**
	 * The name.
	 */
	NAME("NAME"),
	/**
	 * The dob.
	 */
	DOB("DOB"),
	/**
	 * The email.
	 */
	EMAIL("EMAIL"),
	/**
	 * The mobile.
	 */
	MOBILE("MOBILE"),
	/**
	 * The designation.
	 */
	DESIGNATION("DESIGNATION"),
	/**
	 * The isAactive.
	 */
	ISACTIVE("ISACTIVE"),
	/**
	 * The isUser.
	 */
	ISUSER("ISUSER"),
	/**
	 * The role.
	 */
	ROLE("ROLE"),
	/**
	 * The contactOrg.
	 */
	CONTACTORG("CONTACTORG"),
	/**
	 * The reportingtoEmail.
	 */
	REPORTINGTOEMAILS("REPORTINGTO EMAILS"),
	/**
	 * The reportingTo.
	 */
	REPORTINGTO("REPORTINGTO"),
	/**
	 * The contactType.
	 */
	CONTACTTYPE("CONTACTTYPE"),
	/**
	 * The country.
	 */
	COUNTRY("COUNTRY"),
	/**
	 * The state.
	 */
	STATE("STATE"),
	/**
	 * The line.
	 */
	LINE("LINE"),
	/**
	 * The city.
	 */
	CITY("CITY"),
	/**
	 * The zipCode.
	 */
	ZIPCODE("ZIPCODE"),
	/**
	 * The contactOwnerEmail.
	 */
	CONTACTOWNEREMAIL("CONTACTOWNER EMAIL"),
	/**
	 * The contactOwner.
	 */
	CONTACTOWNER("CONTACTOWNER");

	/** The value. */
	private String value;

	/**
	 * Instantiates a new status.
	 *
	 * @param s the s
	 * @PTS Instantiates a new contact columns.
	 */
	private ContactColumns(String s) {
		this.value = s;
	}

	/**
	 * Gets the value.
	 *
	 * @return Response of the status
	 * @PTS Gets the value.
	 */
	public String getValue() {
		return this.value;
	}

	/**
	 * From string.
	 *
	 * @param text the text
	 * @return the contact columns
	 */
	public static ContactColumns fromString(String text) {
		for (ContactColumns b : ContactColumns.values()) {
			if (b.getValue().equalsIgnoreCase(text)) {
				return b;
			}
		}
		return null;
	}
}
