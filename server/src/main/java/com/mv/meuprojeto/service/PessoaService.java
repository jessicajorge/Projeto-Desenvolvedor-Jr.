/**
 * 
 */
package com.mv.meuprojeto.service;

import java.util.List;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.mv.meuprojeto.domain.Pessoa;
import com.mv.meuprojeto.repository.PessoaRepository;

/**
 * @author Jessica
 *
 */

@Service
public class PessoaService {
	
	private PessoaRepository pessoaRepository;
	
	public Pessoa salvarPessoa(Pessoa pessoa) {
		return this.pessoaRepository.save(pessoa);
	}
	
	public List<Pessoa> listarPessoas() {
		return this.pessoaRepository.findAll();
	}
	
	public Pessoa listarPessoaPorId(Long id){
		return this.pessoaRepository.findOne(id);
	}
	
	public Pessoa editarPessoa(Pessoa pessoa) {
		return this.pessoaRepository.save(pessoa);
	}
	
	public void deletarPessoa(Long id) {
		this.pessoaRepository.delete(id);
	}
	
	//Metodo para pesquisar um objeto pelo seus parametros
	public List<Pessoa> pesquisarPorParametros(Pessoa pessoa){
		Example<Pessoa> examplePessoa = Example.of(new Pessoa());
		return this.pessoaRepository.findAll(examplePessoa);
	}
	
	

}
