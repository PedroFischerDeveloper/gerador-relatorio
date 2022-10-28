package com.gerador.relatorio.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gerador.relatorio.model.entities.Coleta;


@Repository
public interface ColetaRepository extends JpaRepository<Coleta, Long>{

}
