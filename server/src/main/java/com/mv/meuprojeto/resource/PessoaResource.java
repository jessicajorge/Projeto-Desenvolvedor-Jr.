package com.mv.meuprojeto.resource;

import java.util.List;

import javax.ws.rs.WebApplicationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mv.meuprojeto.domain.Pessoa;
import com.mv.meuprojeto.service.PessoaService;

/**
 * @author Jessica
 *
 */
@RestController
@RequestMapping("/pessoa")
public class PessoaResource {
	
	@Autowired
	private PessoaService pessoaService;
	
	@GetMapping("/all")
	public ResponseEntity<List<Pessoa>> listarPessoas(){
		try {
			return ResponseEntity.ok(pessoaService.listarPessoas());
		} catch (Exception e) {
			return null;
		}
		
	}
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Pessoa> listarPorId(@PathVariable("id")Long id) {
		try {
			return ResponseEntity.ok(pessoaService.listarPessoaPorId(id));
		} catch (Exception e) {
			return null;
		}
	}
	
	@PostMapping(value="/parametros")
	public ResponseEntity<?> listarPorParametro(@RequestBody Pessoa pessoa){
		try {
			return ResponseEntity.ok(pessoaService.pesquisarPorParametros(pessoa));
		} catch (Exception e) {
			return null;
		}
		
	}
	
	@DeleteMapping(value= "/{id}")
	public ResponseEntity<?> deletar(@PathVariable("id")Long id) {
		try {
			pessoaService.deletarPessoa(id);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			throw new WebApplicationException(500);
		}
		
	}
	
	@PostMapping
	public ResponseEntity<Pessoa> salvar(@RequestBody Pessoa pessoa) {
		try {
			return ResponseEntity.ok(pessoaService.salvarPessoa(pessoa));
		} catch (Exception e) {
			return null;
		}
		
	}
	
	@PutMapping
	public ResponseEntity<Pessoa> editar(@RequestBody Pessoa pessoa){
		try {
			return ResponseEntity.ok(pessoaService.editarPessoa(pessoa));
		} catch (Exception e) {
			return null;
		}
	}
	
	

}
