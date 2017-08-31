package com.smartgrow.arduino;

import com.smartgrow.springboot.web.filter.EnableSgFilters;
import com.smartgrow.springboot.web.security.EnableSgSecurity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableSgFilters
@EnableSgSecurity
@SpringBootApplication
public class ArduinoControllerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArduinoControllerApplication.class, args);
	}
}
