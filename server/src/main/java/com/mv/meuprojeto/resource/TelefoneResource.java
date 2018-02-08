package com.mv.meuprojeto.resource;

import java.util.List;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;

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

import com.mv.meuprojeto.domain.Telefone;
import com.mv.meuprojeto.service.TelefoneService;

/**
 * @author Jessica
 *
 */
@RestController
@RequestMapping(value="/telefone", consumes=MediaType.APPLICATION_JSON, produces=MediaType.APPLICATION_JSON)
public class TelefoneResource {
	
	@Autowired
	private TelefoneService telefoneService;
	
	@GetMapping
	public ResponseEntity<List<Telefone>> listarTelefones(){
		try {
			return ResponseEntity.ok(telefoneService.listarTelefone());
		} catch (Exception e) {
			return null;
		}
	}
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Telefone> listarPorId(@PathVariable("id")Long id){
		try {
			return ResponseEntity.ok(telefoneService.listarPorId(id));
		} catch (Exception e) {
			return null;
		}
	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity<?> deletar(@PathVariable("id")Long id) {
		try {
			telefoneService.deletarTelefone(id);;
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			throw new WebApplicationException(500);
		}
		
	}
	
	@PostMapping(value="/{id}")
	public ResponseEntity<Telefone> salvar(@PathVariable("id")Telefone telefone) {
		try {
			return ResponseEntity.ok(telefoneService.salvarTelefone(telefone));
		} catch (Exception e) {
			return null;
		}
		
	}
	
	@PutMapping
	public ResponseEntity<Telefone> editar(@RequestBody Telefone telefone){
		try {
			return ResponseEntity.ok(telefoneService.editarTelefone(telefone));
		} catch (Exception e) {
			return null;
		}
	}
	
	
	

}
