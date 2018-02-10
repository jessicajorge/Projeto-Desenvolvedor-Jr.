import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { PessoaListarComponent } from 'app/pessoa/pessoa-listar/pessoa-listar.component';
import { PessoaRoutingModule } from 'app/pessoa/pessoa.routing';
import { PessoaService } from 'app/pessoa/pessoa.service';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { PessoaCadastrarComponent } from 'app/pessoa/pessoa-cadastrar/pessoa-cadastrar.component';



@NgModule({
  declarations: [
    PessoaListarComponent,
    PessoaCadastrarComponent
  ],
  imports: [
    PessoaRoutingModule,
    FormsModule,
    CommonModule,
    HttpModule
  ],
  providers: [PessoaService],
})
export class PessoaModule { }
