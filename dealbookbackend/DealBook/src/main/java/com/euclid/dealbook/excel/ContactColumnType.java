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
 * The Enum ContactColumnType.
 */
public enum ContactColumnType {

	/**
	 * The salutation.
	 */
	SALUTATION("General"),
	/**
	 * The name.
	 */
	NAME("General"),
	/**
	 * The dob.
	 */
	DOB("General"),
	/**
	 * The email.
	 */
	EMAIL("General"),
	/**
	 * The mobile.
	 */
	MOBILE("General"),
	/**
	 * The designation.
	 */
	DESIGNATION("General"),
	/**
	 * The isAactive.
	 */
	ISACTIVE("General"),
	/**
	 * The isUser.
	 */
	ISUSER("General"),
	/**
	 * The role.
	 */
	ROLE("General"),
	/**
	 * The contactOrg.
	 */
	CONTACTORG("General"),
	/**
	 * The reportingtoEmail.
	 */
	REPORTINGTOEMAILS("General"),
	/**
	 * The reportingTo.
	 */
	REPORTINGTO("General"),
	/**
	 * The contactType.
	 */
	CONTACTTYPE("General"),
	/**
	 * The country.
	 */
	COUNTRY("General"),
	/**
	 * The state.
	 */
	STATE("General"),
	/**
	 * The line.
	 */
	LINE("General"),
	/**
	 * The city.
	 */
	CITY("General"),
	/**
	 * The zipCode.
	 */
	ZIPCODE("General"),
	/**
	 * The contactOwnerEmail.
	 */
	CONTACTOWNEREMAIL("General"),
	/**
	 * The contactOwner.
	 */
	CONTACTOWNER("General");

	/** The value. */
	private String value;

	/**
	 * Instantiates a new status.
	 *
	 * @param s the s
	 * @PTS Instantiates a new contact column type.
	 */
	private ContactColumnType(String s) {
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
	 * @return the contact column type
	 */
	public static ContactColumnType fromString(String text) {
		for (ContactColumnType b : ContactColumnType.values()) {
			if (b.getValue().equalsIgnoreCase(text)) {
				return b;
			}
		}
		return null;
	}

	/**
	 * By string.
	 *
	 * @param text the text
	 * @return the contact column type
	 */
	public static ContactColumnType byString(String text) {
		return ContactColumnType.valueOf(text);
	}
}
