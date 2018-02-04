/**
 * 
 */
package com.mv.meuprojeto.repository;




import org.springframework.data.jpa.repository.JpaRepository;


import com.mv.meuprojeto.domain.Pessoa;

/**
 * @author Jessica
 *
 */
public interface PessoaRepository extends JpaRepository<Pessoa, Long>{
	

}
