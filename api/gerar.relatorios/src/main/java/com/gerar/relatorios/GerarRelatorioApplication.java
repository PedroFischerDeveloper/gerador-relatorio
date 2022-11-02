package com.gerar.relatorios;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
@ComponentScan("com.gerar.relatorios.*")
public class GerarRelatorioApplication {

	public static void main(String[] args) {
		SpringApplication.run(GerarRelatorioApplication.class, args);
		
	}

}
