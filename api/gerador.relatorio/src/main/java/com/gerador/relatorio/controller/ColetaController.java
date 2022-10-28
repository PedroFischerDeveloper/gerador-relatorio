package com.gerador.relatorio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.gerador.relatorio.exception.AuthorizationException;
import com.gerador.relatorio.model.entities.Coleta;
import com.gerador.relatorio.service.ColetaService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;


public class ColetaController implements ControllerInterface<Coleta>{

	@Autowired
	private ColetaService service;

	@Override
	@GetMapping(produces ="application/json")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200",
			description = "Retorna a lista de coletas"),
			@ApiResponse(responseCode = "403",
			description = "Você não tem permissão para acessar este recurso"),
			@ApiResponse(responseCode = "500",
			description = "Foi gerada uma exceção"),
			})
	@Operation(summary = "Devolve uma lista de coletas")
	public ResponseEntity<List<Coleta>> getAll() {
		return ResponseEntity.ok(service.findAll());
	}

	@Override
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200",
			description = "Retorna a coleta de acordo com seu id"),
			@ApiResponse(responseCode = "403",
			description = "Você não tem permissão para acessar este recurso"),
			@ApiResponse(responseCode = "404",
			description = "Não existe nenhuma coleta com esse id"),
			})
	@Operation(summary = "Devolve a coleta dado seu id")
	@GetMapping(value="/{id}", produces ="application/json")
	public ResponseEntity<?> get(@PathVariable("id") Long id) {
		try {
		Coleta coleta = service.findById(id);
		if(coleta != null) {
			return ResponseEntity.ok(coleta);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}catch (AuthorizationException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}

	@Override
	@PostMapping(produces ="application/json")
	public ResponseEntity<Coleta> post(@RequestBody Coleta obj) {
		service.create(obj);
		return ResponseEntity.ok(obj);
	}

	@Override
	@PutMapping(produces ="application/json")
	public ResponseEntity<?> put(@RequestBody Coleta obj) {
		if(service.update(obj)) {
			return ResponseEntity.ok(obj);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@Override
	@PreAuthorize("hasAnyRole('ADMIN')")
	@DeleteMapping(value="/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		if(service.delete(id)) {
			return ResponseEntity.ok().build();
		}
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	

}
