import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoundElementPropertyAst } from '@angular/compiler';

import 'rxjs/Rx';
import { Pessoa } from 'app/pessoa/pessoa';

@Injectable()
export class PessoaService {

    serviceUrl: string = 'http://localhost:8080/meuprojeto/api/pessoa';

    constructor(private http: Http) {
    }

    listarPessoas(): Observable<any> {
        let url = this.serviceUrl + '/all';
        return this.http.get(url).map((res: Response) => res.json());
    }

    listarPorId(pessoa: Pessoa): Observable<any> {
        let url = this.serviceUrl + '/' + pessoa.id;
        return this.http.get(url).map((res: Response) => res.json());
    }

    listarPorParametros(pessoa: Pessoa): Observable<any> {
        let url = this.serviceUrl + '/parametros';
        let body = JSON.stringify(pessoa);
        return this.http.post(this.serviceUrl, body)
            .map((res: Response) => res.json());
    }



    cadastrarPessoa(pessoa: Pessoa): Observable<any> {
        let body = JSON.stringify(pessoa);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl, body, { headers: headers })
            .map((res: Response) => res.json());

    }

    editarPessoa(pessoa: Pessoa): Observable<any> {
        let body = JSON.stringify(pessoa);
        return this.http.put('http://localhost:8080/meuprojeto/api/pessoa', body)
            .map((res: Response) => res.json());

    }

    deletarPessoa(pessoa: Pessoa) {
        let url = this.serviceUrl + '/' + pessoa.id;
        return this.http.delete(url).map((res: Response) => res.json());

    }

}