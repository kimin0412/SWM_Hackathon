package com.swmaestro.hackathon.swm14.config;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
//	@Bean
//    public Docket api() {
//    	ParameterBuilder aParameterBuilder = new ParameterBuilder();
////        aParameterBuilder.name("Authorization") //헤더 이름
////                .description("jwt access tocken") //설명
////                .modelRef(new ModelRef("string"))
////                .parameterType("header") 
////                .required(false)
////                .build();
//
//        List<Parameter> aParameters = new ArrayList<>();
//        aParameters.add(aParameterBuilder.build());
//    	
//        return new Docket(DocumentationType.SWAGGER_2)
//        		.globalOperationParameters(aParameters)
//                .select()
//                .apis(RequestHandlerSelectors.basePackage("com.swmaestro.hackathon.swm14.controller"))
//                .paths(PathSelectors.ant("/api/**"))
//                .build()
//                .apiInfo(apiInfo());
//    }
	
	@Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();

    }
	
	private ApiInfo apiInfo() {
        return new ApiInfo(
                "BACKEND APIs",
                "For API SERVER descriptions.",
                "v1.0",
                "Terms of service",
                new Contact("", "", ""),
                "License of API", "", Collections.emptyList());
    }
}
