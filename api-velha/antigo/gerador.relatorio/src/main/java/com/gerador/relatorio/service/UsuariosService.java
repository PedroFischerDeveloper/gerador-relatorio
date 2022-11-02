package com.gerador.relatorio.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gerador.relatorio.model.entities.Usuario;
import com.gerador.relatorio.model.repository.UsuarioRepository;


@Service
public class UsuariosService implements ServiceInterface<Usuario>{
	
	@Autowired
	private UsuarioRepository repository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public Usuario create(Usuario obj) {
		obj.setSenha(passwordEncoder.encode(obj.getSenha()));
		repository.save(obj);
		return obj;
	}

	@Override
	public Usuario findById(Long id) {
		Optional<Usuario> usuario = repository.findById(id);
		return usuario.orElse(null);
	}

	@Override
	public List<Usuario> findAll() {
		return repository.findAll();
	}

	@Override
	public boolean update(Usuario obj) {
		if(repository.existsById(obj.getId())) {
			repository.save(obj);
			return true;
		}
		return false;
	}

	@Override
	public boolean delete(Long id) {
		if(repository.existsById(id)) {
			repository.deleteById(id);
			return true;
		}
			return false;
	}

	

}
