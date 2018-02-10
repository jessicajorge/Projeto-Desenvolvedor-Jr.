import { Component, OnInit } from '@angular/core';

import { Pessoa } from 'app/pessoa/pessoa';
import { PessoaService } from 'app/pessoa/pessoa.service';
import { Telefone } from 'app/telefone/telefone';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
    templateUrl: './pessoa-cadastrar.component.html',
})
export class PessoaCadastrarComponent implements OnInit {

    private pessoas: Array<any>;
    private pessoa: Pessoa = new Pessoa();
    private telefone: Telefone = new Telefone();

    private telefones: any;

    constructor(private pessoaService: PessoaService,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let id = this._activatedRoute.snapshot.params['id'];
        this.pessoa.id = id;
        this.listarPorId(this.pessoa);
    }

    cadastrar() {
        this.pessoaService.cadastrarPessoa(this.pessoa).subscribe(res => {
            this.pessoa = res;
        });
    }

    listarPorId(pessoa: Pessoa) {
        this.pessoaService.listarPorId(pessoa).subscribe(res => {
          this.pessoa = res;
        })
      }

    adicionarTelefone() {
        
    }

    deletar(telefone: Telefone) {

    }

}
