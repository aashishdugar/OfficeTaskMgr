package com.euclid.dealbook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.Contact;
import com.euclid.dealbook.exception.ApplicationException;
import com.euclid.dealbook.service.UserCheckpointService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping(path = "checkpoint")
public class UserCheckpointController extends GenericController {

	@Autowired
	private UserCheckpointService userCheckpointService;

	@PostMapping(path = "login")
	public Response login(@RequestBody Contact user) {
		try {
			return createResponse(userCheckpointService.login(user));
		} catch (ApplicationException e) {
			return processException(e);
		}
	}

	@PostMapping(path = "resetPassword")
	public Response resetPassword(@RequestBody Contact user) {
		try {
			userCheckpointService.resetPassword(user);
			return createResponse("Password reset link has been sent.");
		} catch (ApplicationException e) {
			return processException(e);
		}
	}

	@PostMapping(path = "changePassword")
	public Response changePassword(@RequestBody Contact user) {
		try {
			userCheckpointService.changePassword(user);
			return createResponse("Password changed successfull.");
		} catch (ApplicationException e) {
			return processException(e);
		}
	}
}
