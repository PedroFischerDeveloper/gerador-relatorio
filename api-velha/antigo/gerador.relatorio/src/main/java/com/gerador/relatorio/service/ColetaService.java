package com.gerador.relatorio.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gerador.relatorio.model.entities.Coleta;
import com.gerador.relatorio.model.repository.ColetaRepository;





@Service
public class ColetaService implements ServiceInterface<Coleta>{

	@Autowired
	private ColetaRepository repository;
	
	@Override
	public Coleta create(Coleta obj) {
		repository.save(obj);
		return obj;
	}

	@Override
	public Coleta findById(Long id) {
		Optional<Coleta> _coleta = repository.findById(id);
		return _coleta.orElse(null);
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
