import { Component, OnInit } from '@angular/core';

import { Telefone } from 'app/telefone/telefone';
import { TelefoneService } from 'app/telefone/telefone.service';

@Component({
    templateUrl: './telefone-cadastrar.component.html',
    providers: [TelefoneService]
})
export class TelefoneComponent implements OnInit {

    telefones: Array<any>;
    telefone: Telefone;

    constructor(private telefoneService: TelefoneService) { }



    ngOnInit() {
        this.cadastrar(this.telefone);

    }

    cadastrar(telefone: Telefone) {
        this.telefoneService.cadastrarTelefone(telefone).subscribe(res => {
            this.telefone = res;
        });
    }

}
