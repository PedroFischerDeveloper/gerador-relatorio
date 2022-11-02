package com.gerador.relatorio.model.entities;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

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
import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.br.CPF;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_Usuario")
	private Long id;
	
	@Column(name="login", length = 80, unique = true)
	private String login;
	
	@Column(name="senha")
	private String senha;
	
	@Column(name="cd_tel")
	private String telefone;
	
	@CPF
	@Column(name="cd_cpf", length = 11, unique = true)
	private String cpf;
	
	@Email
	@Column(name="email",  unique = true)
	private String email;
	
	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name="tb_perfil")
	private Set<Integer> perfis = new HashSet<>();
	
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

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
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
