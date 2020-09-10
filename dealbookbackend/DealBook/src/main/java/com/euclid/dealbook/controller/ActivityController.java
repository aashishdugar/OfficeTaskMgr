package com.euclid.dealbook.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.euclid.dealbook.dao.Activity;
import com.euclid.dealbook.dao.ContactDetailsView;
import com.euclid.dealbook.exception.DealBookException;
import com.euclid.dealbook.service.ActivityService;
import com.euclid.dealbook.vo.Response;

@RestController
@RequestMapping("/activity")
public class ActivityController extends GenericController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ActivityController.class);

	@Autowired
	private ActivityService activityService;

	@PostMapping("/create")
	public Response create(@RequestBody Activity activityObject) {
		try {
			LOGGER.debug("Create Activity");
			Activity activity = activityService.create(activityObject);
			return createResponse(activity, "Activity Created Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getall")
	public Response getall() {
		try {
			LOGGER.debug("Get All Activity");
			return createResponse(activityService.getall(), "Activity List Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/get/{id}")
	public Response get(@PathVariable int id) {
		try {
			LOGGER.debug("Get Activity");
			Activity activityObject = activityService.get(id);
			return createResponse(activityObject, "Activity Get Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/delete/{id}")
	public Response delete(@PathVariable int id) {
		try {
			LOGGER.debug("Delete Activity");
			activityService.delete(id);
			return createResponse(null, "Activity Deleted");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/update")
	public Response update(@RequestBody Activity activityObject) {
		try {
			LOGGER.debug("Update Activity");
			Activity activity = activityService.save(activityObject);
			return createResponse(activity, "Activity Updated Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getallupdatedby")
	public Response findAllUpdatedBy() {
		try {
			LOGGER.debug("find All UpdatedBy");
			List<ContactDetailsView> contactList = activityService.findAllUpdatedBy();
			return createResponse(contactList, "Contact Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

	@PostMapping("/getallcreatedupdatedby")
	public Response findAllCreatedUpdatedBy() {
		try {
			LOGGER.debug("find All CreatedBy UpdatedBy");
			List<ContactDetailsView> contactList = activityService.findAllCreatedUpdatedBy();
			return createResponse(contactList, "Contact Featched Successfully");
		} catch (DealBookException e) {
			return processException(e);
		}
	}

}
