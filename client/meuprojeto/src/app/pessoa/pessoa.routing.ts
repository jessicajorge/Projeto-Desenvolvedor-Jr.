import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListarComponent } from 'app/pessoa/pessoa-listar/pessoa-listar.component';
import { PessoaCadastrarComponent } from 'app/pessoa/pessoa-cadastrar/pessoa-cadastrar.component';


const routes: Routes = [
    { 
        path: '', 
        component: PessoaListarComponent 
    },
    { 
        path: 'cadastrar', 
        component: PessoaCadastrarComponent
    },
    { 
        path: 'editar/:id', 
        component: PessoaCadastrarComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PessoaRoutingModule { }