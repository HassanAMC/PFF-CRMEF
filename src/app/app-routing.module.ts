import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginStagiaireComponent } from './login/LoginStagiaire/LoginStagiaire.component';
import { LoginFormateurComponent } from './login/loginFormateur/loginFormateur.component';
import { LoginGestionnaireComponent } from './login/loginGestionnaire/loginGestionnaire.component';
import { IndexPageComponent } from './indexPage/indexPage.component';
import { ListRecComponentComponent } from './espaceStagiaire/listReclamation/listRecComponent.component';
import { MyComponentComponent } from './espaceStagiaire/profil-Personnel/my-component.component';
import { ProfilComponent } from './espaceFormateur/profil/profil.component';
import { EmploiComponent } from './espaceFormateur/emploi/emploi.component';
import { ListStagiaireComponent } from './espaceFormateur/listStagiaire/listStagiaire.component';
import { NotesStagiairesComponent } from './espaceGestionnaire/notesStagiaires/notesStagiaires.component';

import { ResultatComponent } from './espaceFormateur/resultat/resultat.component';

import { EmploiStgComponent } from './espaceStagiaire/emploiStg/emploiStg.component';
import { AddStagiaireComponent } from './espaceGestionnaire/addStagiaire/addStagiaire.component';
import { AuthGuard } from "../../src/app/shared/guard/auth.guard";
import { ResultatsComponent } from './espaceStagiaire/resultats/resultats.component';


import { DetailsStagiaireComponent } from './espaceGestionnaire/detailsStagiaire/detailsStagiaire.component';
import { ListeStagiaireComponent } from './espaceGestionnaire/listeStagiaire/listeStagiaire.component';
import { UpdateStagiaireComponent } from './espaceGestionnaire/updateStagiaire/updateStagiaire.component';
import { EmploiGestionnairesComponent } from './espaceGestionnaire/add-Emploi/emploiGestionnaires.component';
import { DashboardComponent } from './espaceGestionnaire/dashboard/dashboard.component';
import { AddFormateurComponent } from './espaceGestionnaire/addFormateur/addFormateur.component';
import { ListeFormateurComponent } from './espaceGestionnaire/listeFormateur/listeFormateur.component';
import { UpdateFormateurComponent } from './espaceGestionnaire/updateFormateur/updateFormateur.component';
import { DetailsFormateurComponent } from './espaceGestionnaire/detailsFormateur/detailsFormateur.component';
import { ListeReclamationComponent } from './espaceGestionnaire/liste-Reclamation/liste-Reclamation.component';
import { ListeResultatComponent } from './espaceGestionnaire/liste-resultat/liste-resultat.component';



import {TestComponent} from './test/test.component';





const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  { path: 'index', component: IndexPageComponent },

  
  { path: 'login/Stagiaire', component: LoginStagiaireComponent },
  { path: 'stagiaire', component: MyComponentComponent  },
  { path: 'stagiaire/emploi', component: EmploiStgComponent },
  { path: 'stagiaire/reclamations', component: ListRecComponentComponent },
  { path: 'stagiaire/resultats', component: ResultatsComponent },


  { path: 'stagiaire/test', component: TestComponent },

  { path: 'login/Formateur', component: LoginFormateurComponent },
  { path: 'formateur', component: ProfilComponent },
  { path: 'formateur/emploi', component: EmploiComponent },
  { path: 'formateur/liste/stagiaires', component: ListStagiaireComponent },


  { path: 'login/Gestionnaire', component: LoginGestionnaireComponent },
  { path: 'gestionnaire/ajoute/stagiaire', component: AddStagiaireComponent },
  { path: 'gestionnaire/details/stagiaire/:codeApoge', component: DetailsStagiaireComponent },
  { path: 'gestionnaire/liste/stagiaire', component: ListeStagiaireComponent },
  { path: 'gestionnaire/update/stagiaire/:codeApoge', component: UpdateStagiaireComponent },
  { path: 'gestionnaire/notes/stagiaire', component: NotesStagiairesComponent },
  { path: 'gestionnaire/emploi/stagiaire', component: EmploiGestionnairesComponent },
  { path: 'gestionnaire/ajoute/formateur', component: AddFormateurComponent },
  { path: 'gestionnaire/liste/formateur', component: ListeFormateurComponent },
  { path: 'gestionnaire/details/formateur', component: DetailsFormateurComponent },
  { path: 'gestionnaire/update/formateur', component: UpdateFormateurComponent },
  { path: 'formateur/notes', component: ResultatComponent },
  { path: 'gestionnaire/dashboard', component: DashboardComponent },
  { path: 'gestionnaire/liste/Reclamtions', component: ListeReclamationComponent },
  { path: 'gestionnaire/resultats/stagiaires', component: ListeResultatComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
