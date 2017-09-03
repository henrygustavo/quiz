import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { DistritoComponent } from './components/distrito/distrito.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'departamento', component: DepartamentoComponent },
    { path: 'provincia', component: ProvinciaComponent },
    { path: 'distrito', component: DistritoComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true } )],
    exports: [RouterModule]
})
export class AppRoutingModule { }