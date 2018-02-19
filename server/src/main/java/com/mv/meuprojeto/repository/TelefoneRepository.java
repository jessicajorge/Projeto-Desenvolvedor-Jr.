/**
 * 
 */
package com.mv.meuprojeto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mv.meuprojeto.domain.Telefone;

/**
 * @author Jessica
 *
 */
public interface TelefoneRepository extends JpaRepository<Telefone, Long> {

	@Query("select t from Telefone t where t.pessoa.id = :pessoaId")
	public List<Telefone> listarPorPessoaId(@Param("pessoaId") Long pessoaId);
}
