import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Formateur } from 'src/app/classe/formateur';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-updateFormateur',
  templateUrl: './updateFormateur.component.html',
  styleUrls: ['./updateFormateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  idformateur: number;
  formateur: Formateur;
   submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,
    private serviceFormateur: FormateurService) { }

  ngOnInit() {
    this.formateur = new Formateur();
    this.idformateur = this.route.snapshot.params['idformateur'];
    
    this.serviceFormateur.getFormateur(this.idformateur)
      .subscribe(data => {
        console.log(data)
        this.formateur = data;
      }, error => console.log(error));
  }

  updateStagiaire() {
    this.serviceFormateur.updateFormateur(this.idformateur, this.formateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formateur = new Formateur();
    this.gotoList();
  }

  onSubmit() {
    this.updateStagiaire();    
  }

  gotoList() {
    this.router.navigate(['/formateurs']);
  }
}
