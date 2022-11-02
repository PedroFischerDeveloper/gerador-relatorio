package com.gerar.relatorios.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gerar.relatorios.exception.AuthorizationException;
import com.gerar.relatorios.model.entities.Coleta;
import com.gerar.relatorios.model.repository.ColetaRepository;
import com.gerar.relatorios.security.JWTUtil;

@Service
public class ColetaService implements ServiceInterface<Coleta>{

	@Autowired
	private ColetaRepository repository;
	
	@Autowired
	private JWTUtil jwtUtil;
	
	@Override
	public Coleta create(Coleta obj) {
		repository.save(obj);
		return obj;
	}

	@Override
	public Coleta findById(Long id) throws AuthorizationException {
		if(!jwtUtil.authorized(id)) {
			throw new AuthorizationException("Acesso negado!");
		}
		Optional<Coleta> _estoque = repository.findById(id);
		return _estoque.orElse(null);
	}

	@Override
	public List<Coleta> findAll() {
		return repository.findAll();
	}

	@Override
	public boolean update(Coleta obj) {
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
