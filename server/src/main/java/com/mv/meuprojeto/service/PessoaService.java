/**
 * 
 */
package com.mv.meuprojeto.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
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

	@Autowired
	private PessoaRepository pessoaRepository;

	public Pessoa salvarPessoa(Pessoa pessoa) {
		return this.pessoaRepository.save(pessoa);
	}

	public List<Pessoa> listarPessoas() {
		List<Pessoa> listaPessoas = this.pessoaRepository.findAll();
		listaPessoas.forEach(p -> {
			caculaIdade(p);
			Hibernate.initialize(p.getTelefone());
		});
		return listaPessoas;
	}

	private void caculaIdade(Pessoa p) {
		Calendar a = getCalendar(p.getDataDeNascimento());
		Calendar b = getCalendar(Calendar.getInstance().getTime());
		int diff = b.get(Calendar.YEAR) - a.get(Calendar.YEAR);
		if (a.get(Calendar.MONTH) > b.get(Calendar.MONTH)
				|| (a.get(Calendar.MONTH) == b.get(Calendar.MONTH) && a.get(Calendar.DATE) > b.get(Calendar.DATE))) {
			diff--;
		}
		p.setIdade(diff);
	}

	public static Calendar getCalendar(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal;
	}

	public Pessoa listarPessoaPorId(Long id) {
		return this.pessoaRepository.findOne(id);
	}

	public Pessoa editarPessoa(Pessoa pessoa) {
		return this.pessoaRepository.save(pessoa);
	}

	public void deletarPessoa(Long id) {
		this.pessoaRepository.delete(id);
	}

	// Metodo para pesquisar um objeto pelo seus parametros
	public List<Pessoa> pesquisarPorParametros(Pessoa pessoa) {
		Example<Pessoa> examplePessoa = Example.of(new Pessoa());
		return this.pessoaRepository.findAll(examplePessoa);
	}

}
