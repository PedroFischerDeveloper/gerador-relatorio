package com.gerar.relatorios.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.gerar.relatorios.model.entities.Usuario;
import com.gerar.relatorios.model.repository.UsuarioRepository;
import com.gerar.relatorios.security.UserDetailsImpl;


@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private UsuarioRepository repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = repo.findByNome(username);
		if(usuario == null) {
			throw new UsernameNotFoundException("Usuário não encontrado");
		}
		return new UserDetailsImpl(usuario.getId(),usuario.getCpf(), usuario.getSenha(), usuario.getPerfis());
	}

}
