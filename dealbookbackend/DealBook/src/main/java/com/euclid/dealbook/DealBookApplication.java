package com.euclid.dealbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class DealBookApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(DealBookApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(DealBookApplication.class, args);
	}

	@RequestMapping(value = "/")
	public String home() {
		return "Welcome to DealBook App By Euclid Innovations";
	}
}
