/**
 * 
 */
package com.mv.meuprojeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mv.meuprojeto.domain.Telefone;
import com.mv.meuprojeto.repository.TelefoneRepository;

/**
 * @author Jessica
 *
 */

@Service
public class TelefoneService {
	
	@Autowired
	private TelefoneRepository telefoneRepository;
	
	public Telefone salvarTelefone(Telefone telefone) {
		return this.telefoneRepository.save(telefone);
	}
	
	public List<Telefone> listarTelefone() {
		return this.telefoneRepository.findAll();
	}
	
	public Telefone listarPorId(Long id) {
		return this.telefoneRepository.findOne(id);
	}
		
	public List<Telefone> listarPorPessoaId(Long pessoaId){
		return this.telefoneRepository.listarPorPessoaId(pessoaId);
	}
		
	public Telefone editarTelefone(Telefone telefone) {
		return this.telefoneRepository.save(telefone);
	}
	
	public void deletarTelefone(Long id) {
		this.telefoneRepository.delete(id);
	}
	
	
	

}
