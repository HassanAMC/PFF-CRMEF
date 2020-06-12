import { Component, OnInit } from '@angular/core';
import { RecServiceService } from 'src/app/recService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceStagiaireService } from 'src/app/service/serviceStagiaire.service';
import { Stagiaire } from 'src/app/classe/stagiaire';
import { FormateurService } from 'src/app/service/formateur.service';
import { Formateur } from 'src/app/classe/formateur';
import { FormateurServiceService } from 'src/app/service/formateurService.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reclamation } from 'src/app/classe/reclamation';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  formateur : Formateur = new Formateur();
 

  idformateur: number;


 

  constructor(
    private router: Router, private stgservice: FormateurServiceService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.reloadData();

  }


  reloadData() {
    //this.stagiair=this.stgservice.getStagiaire(1);

    this.formateur = new Formateur();

    this.idformateur = this.route.snapshot.params['idformateur'];

    this.stgservice.getFormateur(this.idformateur)
      .subscribe(data => {
        console.log(data)
        this.formateur = data;
      }, error => console.log(error));
  }





}
