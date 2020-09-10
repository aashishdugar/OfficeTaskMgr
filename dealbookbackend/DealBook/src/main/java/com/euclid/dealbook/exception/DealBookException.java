package com.euclid.dealbook.exception;

public class DealBookException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6243725284663555127L;
	private String errorMessage;

	public DealBookException(String msg) {
		super(msg);
		this.errorMessage = msg;
	}

	/**
	 * Instantiates a new application exception.
	 *
	 * @param code the code
	 * @param e    the e
	 * @PTS Instantiates a new application exception.
	 */
	public DealBookException(Exception e) {
		super(e);
		this.errorMessage = e.getMessage();
	}

	/**
	 * Get Method for error message.
	 *
	 * @return the errorMessage
	 * @PTS Gets the error message.
	 */

	public String getErrorMessage() {
		return this.errorMessage;
	}

	/**
	 * Sets the error message values.
	 *
	 * @param errorMessage the errorMessage to set
	 * @PTS Sets the error message.
	 */

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
}
