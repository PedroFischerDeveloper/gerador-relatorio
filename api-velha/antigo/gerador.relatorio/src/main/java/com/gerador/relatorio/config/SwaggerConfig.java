package com.gerador.relatorio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class SwaggerConfig {

	@Bean
	public OpenAPI GeradorRelatorioOpenAPI() {
		return new OpenAPI().info(new Info()
				.title("API do Projeto Gerador de relatório")
				.description("Esta API é utilizada para gerar relatório de coletas").version("v0.0.1")
				.contact(new Contact().name("Marcos Vinicius Sousa do Rosário").email("dev.marcos532@gmail.com"))
				.license(new License().name("Apache 2.0").url("http://springdoc.org")));
	}

}
