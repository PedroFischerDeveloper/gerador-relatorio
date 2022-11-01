package com.gerar.relatorios.model.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.br.CPF;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.gerar.relatorios.model.entities.TipoPerfil;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_Usuario")
	private Long id;
	

	@Column(name="nome")
	private String nome;
	
	@Column(name="senha")
	private String senha;
	
	
	@CPF
	@Column(name="cpf", unique = true)
	private String cpf;
	
	@Email
	@Column(name="email",  unique = true)
	private String email;
	
	@Column(name="telefone")
	private String telefone;
	
	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name="tb_perfil")
	private Set<Integer> perfis = new HashSet<>();
	
	
	@ManyToOne(cascade=CascadeType.ALL, targetEntity=Coleta.class)
	@JoinColumn(name="id_coleta")
	private List<Coleta> coleta;
	
	
	
	public List<Coleta> getColeta() {
		return coleta;
	}

	public void setColeta(List<Coleta> coleta) {
		this.coleta = coleta;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Set<TipoPerfil> getPerfis(){
		return perfis.stream()
				.map(x -> TipoPerfil.toEnum(x)).collect(Collectors.toSet());
	}
	
	public void addPerfil(TipoPerfil perfil) {
		this.perfis.add(perfil.getCod());
		}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}


	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
