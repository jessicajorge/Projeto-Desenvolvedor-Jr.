import { Component, OnInit } from '@angular/core';

import { Pessoa } from 'app/pessoa/pessoa';
import { PessoaService } from 'app/pessoa/pessoa.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './pessoa-listar.component.html',
})
export class PessoaListarComponent implements OnInit {

  public pessoa: Pessoa;
  public pessoas: Array<any>;

  constructor(private pessoaService: PessoaService,
    private _router: Router) { }

  ngOnInit() {
    this.pessoaService.listarPessoas().subscribe(res => {
      this.pessoas = res;
    });
  }

  editar(pessoa: Pessoa) {
    this._router.navigate(['/pessoa/editar', pessoa.id]);
  }

  listarPorId(pessoa: Pessoa) {
    this.pessoaService.listarPorId(pessoa).subscribe(res => {
      this.pessoa = res;
    })
  }

  pesquisar() {
    this.listarPorParametros(this.pessoa);
  }

  listarPorParametros(pessoa: Pessoa) {
    this.pessoaService.listarPorParametros(pessoa).subscribe(res => {
      this.pessoas = res;
    });
  }

  deletar(pessoa: Pessoa) {
    this.pessoaService.deletarPessoa(pessoa);
  }

}
