import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AuthService } from './service/auth.service';
import {TestComponent} from './test/test.component';

import { IndexPageComponent } from './indexPage/indexPage.component';

import { LoginFormateurComponent } from './login/loginFormateur/loginFormateur.component';
import { ListRecComponentComponent } from './espaceStagiaire/listReclamation/listRecComponent.component';
import { ProfilComponent } from './espaceFormateur/profil/profil.component';
import { EmploiComponent } from './espaceFormateur/emploi/emploi.component';

import { LoginStagiaireComponent } from './login/LoginStagiaire/LoginStagiaire.component';
import { MyComponentComponent } from './espaceStagiaire/profil-Personnel/my-component.component';
import { ResultatsComponent } from './espaceStagiaire/resultats/resultats.component';
import { ListStagiaireComponent } from './espaceFormateur/listStagiaire/listStagiaire.component';
import { ResultatComponent } from './espaceFormateur/resultat/resultat.component';


import { EmploiStgComponent } from './espaceStagiaire/emploiStg/emploiStg.component';

import { LoginGestionnaireComponent } from './login/loginGestionnaire/loginGestionnaire.component';
import { AddStagiaireComponent } from './espaceGestionnaire/addStagiaire/addStagiaire.component';
import { DetailsStagiaireComponent } from './espaceGestionnaire/detailsStagiaire/detailsStagiaire.component';
import { ListeStagiaireComponent } from './espaceGestionnaire/listeStagiaire/listeStagiaire.component';
import { UpdateStagiaireComponent } from './espaceGestionnaire/updateStagiaire/updateStagiaire.component';
import { NotesStagiairesComponent } from './espaceGestionnaire/notesStagiaires/notesStagiaires.component';
import { EmploiGestionnairesComponent } from './espaceGestionnaire/add-Emploi/emploiGestionnaires.component';
import { ListeReclamationComponent } from './espaceGestionnaire/liste-Reclamation/liste-Reclamation.component';



import { AddFormateurComponent } from './espaceGestionnaire/addFormateur/addFormateur.component';
import { ListeFormateurComponent } from './espaceGestionnaire/listeFormateur/listeFormateur.component';

import { UpdateFormateurComponent } from './espaceGestionnaire/updateFormateur/updateFormateur.component';
import { DetailsFormateurComponent } from './espaceGestionnaire/detailsFormateur/detailsFormateur.component';

import { DashboardComponent } from './espaceGestionnaire/dashboard/dashboard.component';
import { StagiaireService } from './service/Stagiaire.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListeResultatComponent } from './espaceGestionnaire/liste-resultat/liste-resultat.component';






//import { TestComponent } from './test/test.component';









@NgModule({
   declarations: [
      AppComponent,
      MyComponentComponent,
      ListRecComponentComponent,
      LoginStagiaireComponent,
      IndexPageComponent,
      LoginFormateurComponent,
      LoginGestionnaireComponent,
      EmploiComponent,
      ProfilComponent,
      ListStagiaireComponent,
      EmploiStgComponent,
      AddStagiaireComponent,
      TestComponent,AddStagiaireComponent,
      DetailsStagiaireComponent,
      ListeStagiaireComponent,
      UpdateStagiaireComponent,
      NotesStagiairesComponent,
      EmploiGestionnairesComponent,
      DashboardComponent,
      ListeFormateurComponent,
      AddFormateurComponent,
      UpdateFormateurComponent,DetailsFormateurComponent,ResultatComponent,ResultatsComponent,ListeReclamationComponent,ListeResultatComponent

   ],
   imports: [
      BsDatepickerModule.forRoot(),
      BrowserAnimationsModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,

   ],
   providers: [
      AuthService,StagiaireService,NgbModalConfig,NgbModal
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
