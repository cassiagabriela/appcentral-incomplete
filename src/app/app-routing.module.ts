import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: 'documentos', loadChildren: './documentos/documentos.module#DocumentosPageModule'},
  { path: 'editais', loadChildren: './editais/editais.module#EditaisPageModule' },
  { path: 'teste', loadChildren: './teste/teste.module#TestePageModule' },
  { path: 'sair', loadChildren: './sair/sair.module#SairPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'vagas', loadChildren: './vagas/vagas.module#VagasPageModule' },
  { path: 'inscricoes', loadChildren: './inscricoes/inscricoes.module#InscricoesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
