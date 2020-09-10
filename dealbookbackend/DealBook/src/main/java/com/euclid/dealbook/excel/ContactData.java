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
 * The Class ContactData.
 */
public class ContactData {

	/**
	 * The rows.
	 */
	private List<ContactRowData> rows = new ArrayList<>();

	/**
	 * @return the rows
	 */
	public List<ContactRowData> getRows() {
		return rows;
	}

	/**
	 * @param rows the rows to set
	 */
	public void setRows(List<ContactRowData> rows) {
		this.rows = rows;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ContactData [rows=" + rows + "]";
	}

}
