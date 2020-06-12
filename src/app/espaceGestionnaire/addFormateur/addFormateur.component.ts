import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/classe/formateur';
import { Router } from '@angular/router';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-addFormateur',
  templateUrl: './addFormateur.component.html',
  styleUrls: ['./addFormateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  formateur: Formateur = new Formateur();
  submitted = false;

  constructor(private formateurService: FormateurService,
    private router: Router) { }

  ngOnInit() {
  }

  newStagiaire(): void {
    this.submitted = false;
    this.formateur = new Formateur();
  }

  save() {
    this.formateurService.createFormateur(this.formateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formateur = new Formateur();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/gestionnaire/liste_formateur']);
  }

}
