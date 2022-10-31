package com.gerar.relatorios.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gerar.relatorios.model.entities.Coleta;

@Repository
public interface ColetaRepository extends JpaRepository<Coleta, Long>{

}
