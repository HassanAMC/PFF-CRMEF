import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/classe/stagiaire';
import { StagiaireService } from 'src/app/service/Stagiaire.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailsStagiaire',
  templateUrl: './detailsStagiaire.component.html',
  styleUrls: ['./detailsStagiaire.component.css']
})
export class DetailsStagiaireComponent implements OnInit {

  codeApoge: number;
  stagiaire: Stagiaire;

  constructor(private route: ActivatedRoute,private router: Router,
    private stagiaireService: StagiaireService) { }

  ngOnInit() {
    this.stagiaire = new Stagiaire();

    this.codeApoge = this.route.snapshot.params['codeApoge'];
    
    this.stagiaireService.getStagiaire(this.codeApoge)
      .subscribe(data => {
        console.log(data)
        this.stagiaire = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['gestionnaire/liste_stagiaire']);
  }
}
