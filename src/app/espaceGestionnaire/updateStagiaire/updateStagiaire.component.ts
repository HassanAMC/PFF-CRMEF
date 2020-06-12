import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/classe/stagiaire';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from 'src/app/service/Stagiaire.service';

@Component({
  selector: 'app-updateStagiaire',
  templateUrl: './updateStagiaire.component.html',
  styleUrls: ['./updateStagiaire.component.css']
})
export class UpdateStagiaireComponent implements OnInit {
  nom: string;
  codeApoge: number;
  stagiaire: Stagiaire;
   submitted = false;

   filieres = [ {name : "Math", value :"Math"}, {name : "Physique", value :"Physique"},{name : "arabic", value :"arabic"},{name : "english", value :"english"}];

   groupes = [ {name : "G1", value :"G1"},{name : "G2", value :"G2"},{name : "G3", value :"G3"},{name : "G4", value :"G4"},{name : "G5", value :"G5"}];
  constructor(private route: ActivatedRoute,private router: Router,
    private stagiaireService: StagiaireService) { }

  ngOnInit() {
    this.stagiaire = new Stagiaire();
    this.codeApoge = this.route.snapshot.params['codeApoge'];
    this.nom = this.route.snapshot.params['nom'];

    
    this.stagiaireService.getStagiaire(this.codeApoge)
      .subscribe(data => {
        console.log(data)
        this.stagiaire = data;
      }, error => console.log(error));
  }

  updateStagiaire() {
    this.stagiaireService.updateStagiaire(this.codeApoge, this.stagiaire)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stagiaire = new Stagiaire();
    this.gotoList();
  }

  onSubmit() {
    this.updateStagiaire();    
  }

  gotoList() {
    this.router.navigate(['stagiaires']);
  }

}
