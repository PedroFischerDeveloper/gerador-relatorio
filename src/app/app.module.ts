import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { CadastroAgenteComponent } from './cadastro-agente/cadastro-agente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, RelatorioComponent, CadastroAgenteComponent, LoginComponent, FormCadastroComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
