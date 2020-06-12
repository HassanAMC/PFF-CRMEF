import { StagiaireService } from 'src/app/service/Stagiaire.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Stagiaire } from 'src/app/classe/stagiaire';
import { Observable } from 'rxjs';
import { Note } from 'src/app/classe/Note';
import { NotesService } from 'src/app/service/Notes.service';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/classe/formateur';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stagiaires: Observable<Stagiaire[]>;
  formateurs: Observable<Formateur[]>;

  note: Note = new Note();
  submitted = false;

  filieres = [ {name : "Math", value :"Math"}, {name : "Physique", value :"Physique"},{name : "arabic", value :"arabic"},{name : "english", value :"english"}];

  @ViewChild('htmlData') htmlData:ElementRef;

   i: number;
   f: number;

  constructor(private serviceNote: NotesService,private stagiaireService: StagiaireService,
    private router: Router,private formateurService : FormateurService) {

     
     }
      


  ngOnInit() {

    this.reloadData();
    this.count();

  }

  reloadData() {
    this.stagiaires = this.stagiaireService.getStagiairesList();
    this.formateurs = this.formateurService.getFormateurList();
  }
  


  count(){
 

    this.stagiaires.subscribe(result => {this.i=result.length});
    this.formateurs.subscribe(result => {this.f=result.length});
  }
  



  newNote(): void {
    this.submitted = false;
    this.note = new Note();
  }

  save() {
    this.serviceNote.createNote(this.note)
      .subscribe(data => console.log(data), error => console.log(error));
    this.note = new Note();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['gestionnaire/notes_stagiaire']);
  }
}
