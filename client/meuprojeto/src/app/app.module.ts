import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app.routing';
import { CommonModule } from '@angular/common';
import { ApplicationRef_ } from '@angular/core/src/application_ref';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { PessoaService } from 'app/pessoa/pessoa.service';
import { PessoaListarComponent } from 'app/pessoa/pessoa-listar/pessoa-listar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule, 
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
