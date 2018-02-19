import { Component, OnInit } from '@angular/core';

import { Pessoa } from 'app/pessoa/pessoa';
import { PessoaService } from 'app/pessoa/pessoa.service';
import { Telefone } from 'app/telefone/telefone';
import { ToastrService } from 'ngx-toastr';
import { TelefoneService } from '../../telefone/telefone.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './pessoa-cadastrar.component.html',
})
export class PessoaCadastrarComponent implements OnInit {

    private pessoas: Array<any>;
    private pessoa: Pessoa = new Pessoa();
    private telefone: Telefone = new Telefone();
    private cadastro: Boolean = true;

    private telefones: any;

    constructor(private pessoaService: PessoaService,
        private telefoneService: TelefoneService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private toastr: ToastrService) { }

    ngOnInit() {
        let id = this._activatedRoute.snapshot.params['id'];
        if (id) {
            this.cadastro = false;
            this.carregarTelefonesPessoa(id);
            this.pessoa.id = id;
            this.listarPorId(this.pessoa);
        }
    }

    cadastrar() {
        this.pessoaService.cadastrarPessoa(this.pessoa).subscribe(res => {
            this.pessoa = res;
            this.toastr.success('Pessoa cadastrada com sucesso.');
            this._router.navigate(['pessoa/editar', this.pessoa.id]);
        });
    }

    editar() {
        this.pessoaService.editarPessoa(this.pessoa).subscribe(res => {
            this.pessoa = res;
            this.toastr.success('Pessoa editada com sucesso.');
        });
    }

    listarPorId(pessoa: Pessoa) {
        this.pessoaService.listarPorId(pessoa).subscribe(res => {
            this.pessoa = res;
        });
    }

    adicionarTelefone() {
        this.telefone.pessoa = this.pessoa;
        this.telefoneService.cadastrarTelefone(this.telefone).subscribe(res => {
            this.toastr.success('Telefone adicionado com sucesso');
            this.carregarTelefonesPessoa(this.pessoa.id);
        }, err => {
            this.toastr.error('Ocorreu um erro inesperado');
            console.log(err);
        });
    }

    carregarTelefonesPessoa(pessoaId: number) {
        this.telefoneService.listarPorPessoaId(pessoaId).subscribe(res => {
            this.telefones = res;
        });
    }

    deletar(telefoneId: number) {
        this.telefoneService.deletarPessoa(telefoneId).subscribe(res => {
            this.toastr.success('Telefone deletado com sucesso.');
            this.carregarTelefonesPessoa(this.pessoa.id);
        });
    }

}
