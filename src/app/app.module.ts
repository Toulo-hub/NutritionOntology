import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ResultatComponent } from './resultat/resultat.component';
import { AlimentsService } from './aliments.service';
import { AjouterComponent } from './ajouter/ajouter.component';
import { RequeteComponent } from './requete/requete.component';
import { ValiderComponent } from './valider/valider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResultatComponent,
    AjouterComponent,
    RequeteComponent,
    ValiderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AlimentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
