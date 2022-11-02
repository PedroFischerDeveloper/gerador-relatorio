package com.gerador.relatorio.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.gerador.relatorio.model.entities.Endereco;
import com.gerador.relatorio.model.repository.EnderecoRepository;

public class EnderecoService implements ServiceInterface<Endereco>{

	
	@Autowired
	private EnderecoRepository repository;
	
	@Override
	public Endereco create(Endereco obj) {
		repository.save(obj);
		return obj;
	}

	@Override
	public Endereco findById(Long id) {
		Optional<Endereco> _endereco = repository.findById(id);
		return _endereco.orElse(null);
	}

	@Override
	public List<Endereco> findAll() {
		return repository.findAll();
	}

	@Override
	public boolean update(Endereco obj) {
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
