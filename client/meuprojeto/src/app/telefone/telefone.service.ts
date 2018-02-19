import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoundElementPropertyAst } from '@angular/compiler';

import { Telefone } from 'app/telefone/telefone';
import 'rxjs/Rx';

@Injectable()
export class TelefoneService {

    serviceUrl: string = 'http://localhost:8080/meuprojeto/api/telefone';

    constructor(private http: Http) {
    }

    listarTelefones(): Observable<any> {
        return this.http.get(this.serviceUrl)
            .map((res: Response) => res.json());
    }

    listarPorId(telefone: Telefone): Observable<any> {
        let url = this.serviceUrl + '/' + telefone.id;
        return this.http.get(url).map((res: Response) => res.json());
    }

    listarPorPessoaId(pessoaId: number) {
        let url = this.serviceUrl + '/pessoa/' + pessoaId;
        return this.http.get(url).map((res: Response) => res.json());
    }

    listarPorParametros(telefone: Telefone): Observable<any> {
        let url = this.serviceUrl + '/parametros';
        let body = JSON.stringify(telefone);
        return this.http.post(this.serviceUrl, body)
            .map((res: Response) => res.json());
    }

    cadastrarTelefone(telefone: Telefone): Observable<any> {
        let body = JSON.stringify(telefone);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl, body, { headers: headers })
            .map((res: Response) => res.json());

    }

    editarPessoa(telefone: Telefone): Observable<any> {
        let body = JSON.stringify(telefone);
        return this.http.put('http://localhost:8080/meuprojeto/api/telefone', body)
            .map((res: Response) => res.json());

    }

    deletarPessoa(telefoneId: number) {
        let url = this.serviceUrl + '/' + telefoneId;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(url, { headers: headers });

    }

}