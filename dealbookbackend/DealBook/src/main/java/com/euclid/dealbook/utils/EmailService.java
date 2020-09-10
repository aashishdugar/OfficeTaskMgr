package com.euclid.dealbook.utils;

import java.text.MessageFormat;
import java.util.Properties;
import java.util.Random;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.exception.ApplicationException;

@Service
public class EmailService {

	private static final Logger LOGGER = LoggerFactory.getLogger(EmailService.class);
	@Autowired
	private EmailConfigProperites emailConfigProperites;

	@Value(value = "${user.checkpoint.changePassword.url}")
	private String changePasswordUrl;

	/**
	 * This call sends a message to one recipient.
	 * 
	 * @throws ApplicationException
	 */
	public void sendEmail(Contact user) throws ApplicationException {

		Properties properties = createProperties();
		Session session = Session.getDefaultInstance(properties, getAuthenticator());
		try {
			Transport.send(createMessage(user, session));
			LOGGER.debug("Password reset link has been sent to {0}", user.getEmail());
		} catch (MessagingException e) {
			String errorMessage = "Exception while sending the mail to " + user.getEmail();
			LOGGER.error(errorMessage, e);
			throw new ApplicationException(errorMessage);
		}
	}

	private Message createMessage(Contact user, Session session) throws MessagingException, AddressException {

		Message message = new MimeMessage(session);
		message.setFrom(new InternetAddress(emailConfigProperites.getSenderEmail()));
		message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(user.getEmail()));
		message.setSubject("Password Reset Request");
		message.setContent(createEmailTextMessage(user), "text/html");
		return message;
	}

	private Authenticator getAuthenticator() {
		return new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(emailConfigProperites.getApiKey(),
						emailConfigProperites.getSecretKey());
			}
		};
	}

	private Properties createProperties() {
		Properties properties = new Properties();
		properties.put("mail.smtp.host", emailConfigProperites.getHost());
		properties.put("mail.smtp.socketFactory.port", emailConfigProperites.getPort());
		properties.put("mail.smtp.socketFactory.class", emailConfigProperites.getSocketFactoryClass());
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.port", emailConfigProperites.getPort());
		return properties;
	}

	private String createEmailTextMessage(Contact user) {
//		String salutation = "";
//
//		if (null != user.getSalutation()) {
//			salutation = user.getSalutation();
//		}
		return MessageFormat.format(
				"Dear {0},<p>You have" + " requested to reset password of your DealBook"
						+ " account. In order to complete password" + " reset procedure you will need to click "
						+ " <a href={1}>here</a>" + " and send request using <b>{2}</b> to reset"
						+ " password.<br>If you did not request" + " password reset, please let us know"
						+ " immediately by replying to this email.</p>" + "<p>Regards,<br>Euclid Dealbook Team</p>",
				user.getName(), changePasswordUrl, user.getToken().toString());
	}

	/**
	 * Method to generate a new token (a 6 digit number)
	 * 
	 * @return token
	 */
	public int generateToken() {

		Random random = new Random();
		return 100000 + random.nextInt(899999);
	}
}
