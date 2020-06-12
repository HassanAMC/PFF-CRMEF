import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/classe/stagiaire';
import { Router } from '@angular/router';
import { StagiaireService } from 'src/app/service/Stagiaire.service';

@Component({
  selector: 'app-addStagiaire',
  templateUrl: './addStagiaire.component.html',
  styleUrls: ['./addStagiaire.component.css']
})
export class AddStagiaireComponent implements OnInit {
  stagiaire: Stagiaire = new Stagiaire();
  submitted = false;

  filieres = [ {name : "Math", value :"Math"}, {name : "Physique", value :"Physique"},{name : "arabic", value :"arabic"},{name : "english", value :"english"}];

  groupes = [ {name : "G1", value :"G1"},{name : "G2", value :"G2"},{name : "G3", value :"G3"},{name : "G4", value :"G4"},{name : "G5", value :"G5"}];


  constructor(private stagiaireService: StagiaireService,
    private router: Router) { }

  ngOnInit() {
  }

  newStagiaire(): void {
    this.submitted = false;
    this.stagiaire = new Stagiaire();
  }

  save() {
    this.stagiaireService.createStagiaire(this.stagiaire)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stagiaire = new Stagiaire();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/gestionnaire/liste_stagiaire']);
  }

}
