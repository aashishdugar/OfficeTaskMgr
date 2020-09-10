package com.euclid.dealbook.exception;

/**
 * The Class ValidationException.
 *
 */
public class ValidationException extends DealBookException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2724366978632365459L;
	/**
	 * The error message.
	 */
	private String errorMessage;

	/**
	 * Instantiates a new application exception.
	 *
	 * @param code the code
	 * @param msg  the msg
	 * @PTS Instantiates a new application exception.
	 */
	public ValidationException(String msg) {
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
	public ValidationException(Exception e) {
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
