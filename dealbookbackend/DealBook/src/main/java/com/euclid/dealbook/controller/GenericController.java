package com.euclid.dealbook.controller;

import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.vo.Response;

public class GenericController {

	public Response processException(DealBookException e) {
		e.printStackTrace();
		Response response = new Response();
		response.setStatus("FAIL");
		response.setErrormsg(e.getErrorMessage());
		return response;

	}

	public Response createResponse(Object object) {
		Response response = new Response();
		response.setStatus("SUCCESS");
		response.setErrormsg("");
		response.setData(object);
		return response;
	}

	public Response createResponse(Object object, String msg) {
		Response response = new Response();
		response.setStatus("SUCCESS");
		response.setErrormsg("");
		response.setData(object);
		response.setMsg(msg);
		return response;
	}
}
