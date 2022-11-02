package com.gerar.relatorios.model.entities;



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
	@Column(name="id")
	private Long id;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="ativo")
	private boolean ativo;
	
	@Column(name="criadouro")
	private String criadouro;
	
	@Column(name="larvas")
	private boolean larvas;
	
	@Column(name="aviso")
	private boolean aviso;
	
	@Column(name="responsavel")
	private String responsavel;
	
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

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

	public String getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(String responsavel) {
		this.responsavel = responsavel;
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
