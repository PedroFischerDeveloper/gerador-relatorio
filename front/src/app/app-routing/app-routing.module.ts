import { CadastroComponent } from './../cadastro/cadastro.component';
import { ColetaComponent } from './../coleta/coleta.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'coleta', component: ColetaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
