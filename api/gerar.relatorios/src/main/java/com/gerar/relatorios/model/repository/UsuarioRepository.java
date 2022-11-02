package com.gerar.relatorios.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gerar.relatorios.model.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	Usuario findByNome(String nome);

}
