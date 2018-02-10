import { Telefone } from 'app/telefone/telefone';

export class Pessoa {
    id: number;
    cpf: string;
    dataDeNascimento: Date;
    email: string;
    telefone: Telefone[];
}