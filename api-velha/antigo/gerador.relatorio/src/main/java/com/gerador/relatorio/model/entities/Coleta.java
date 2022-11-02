package com.gerador.relatorio.model.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Coleta {

	
	public Coleta() {}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_coleta")
	private Long id;
	
	
	@Column(name="nm_entrevistado")
	private String entrevistado;
	
	@Column(name="ativo")
	private boolean ativo;
	
	@Column(name="criadouro")
	private String criadouro;
	
	@Column(name="larvas")
	private boolean larvas;
	
	@Column(name="aviso")
	private boolean aviso;
	
	@Column(name="nm_coletador")
	private String coletador;
	
	@Column(name="funcao")
	private String funcao;
	
	@Column(name="observacao")
	private String observacao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEntrevistado() {
		return entrevistado;
	}

	public void setEntrevistado(String entrevistado) {
		this.entrevistado = entrevistado;
	}

	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}

	public String getCriadouro() {
		return criadouro;
	}

	public void setCriadouro(String criadouro) {
		this.criadouro = criadouro;
	}

	public boolean isLarvas() {
		return larvas;
	}

	public void setLarvas(boolean larvas) {
		this.larvas = larvas;
	}

	public boolean isAviso() {
		return aviso;
	}

	public void setAviso(boolean aviso) {
		this.aviso = aviso;
	}

	public String getColetador() {
		return coletador;
	}

	public void setColetador(String coletador) {
		this.coletador = coletador;
	}

	public String getFuncao() {
		return funcao;
	}

	public void setFuncao(String funcao) {
		this.funcao = funcao;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}
	
	
	
	
	
	
	

}
