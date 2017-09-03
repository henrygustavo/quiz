import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/header.component';
import { HomeComponent } from './components/home/home.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { DistritoComponent } from './components/distrito/distrito.component';

import { ApiService } from  './shared/api.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        DepartamentoComponent,
        ProvinciaComponent,
        DistritoComponent
    ],
    bootstrap: [AppComponent],
    providers: [ ApiService]
})
export class AppModule { }