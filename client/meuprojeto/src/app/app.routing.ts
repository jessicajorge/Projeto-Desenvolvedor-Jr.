import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListarComponent } from 'app/pessoa/pessoa-listar/pessoa-listar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pessoa',
    pathMatch: 'full'
  },
  {
    path: 'pessoa',
    loadChildren: './pessoa/pessoa.module#PessoaModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }