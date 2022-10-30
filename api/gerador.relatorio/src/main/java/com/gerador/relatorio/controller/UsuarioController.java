package com.gerador.relatorio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gerador.relatorio.exception.AuthorizationException;
import com.gerador.relatorio.model.entities.Usuario;
import com.gerador.relatorio.service.UsuariosService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;



@Controller
@CrossOrigin()
@RequestMapping("/usuario")
public class UsuarioController implements ControllerInterface<Usuario>{

	@Autowired
	private UsuariosService service;

	@Override
	@GetMapping(produces ="application/json")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200",
			description = "Retorna a lista de usuários"),
			@ApiResponse(responseCode = "403",
			description = "Você não tem permissão para acessar este recurso"),
			@ApiResponse(responseCode = "500",
			description = "Foi gerada uma exceção"),
			})
	@Operation(summary = "Devolve uma lista de usuários")
	public ResponseEntity<List<Usuario>> getAll() {
		return ResponseEntity.ok(service.findAll());
	}

	@Override
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200",
			description = "Retorna o usuário de acordo com seu id"),
			@ApiResponse(responseCode = "403",
			description = "Você não tem permissão para acessar este recurso"),
			@ApiResponse(responseCode = "404",
			description = "Não existe nenhum usuário com esse id"),
			})
	@Operation(summary = "Devolve o usuário dado seu id")
	@GetMapping(value="/{id}", produces ="application/json")
	public ResponseEntity<?> get(@PathVariable("id") Long id) {
		try {
		Usuario usuario = service.findById(id);
		if(usuario != null) {
			return ResponseEntity.ok(usuario);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}catch (AuthorizationException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}

	@Override
	@PostMapping(produces ="application/json")
	public ResponseEntity<Usuario> post(@RequestBody Usuario obj) {
		service.create(obj);
		return ResponseEntity.ok(obj);
	}

	@Override
	@PutMapping(produces ="application/json")
	public ResponseEntity<?> put(@RequestBody Usuario obj) {
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
