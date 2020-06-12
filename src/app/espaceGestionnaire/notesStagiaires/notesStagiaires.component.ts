import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Note } from 'src/app/classe/Note';
import { Router } from '@angular/router';
import { StagiaireService } from 'src/app/service/Stagiaire.service';
import { NotesService } from 'src/app/service/Notes.service';
import { Observable } from 'rxjs';
import { Stagiaire } from 'src/app/classe/stagiaire';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-notesStagiaires',
  templateUrl: './notesStagiaires.component.html',
  styleUrls: ['./notesStagiaires.component.css']
})
export class NotesStagiairesComponent implements OnInit {
  stagiaires: Observable<Stagiaire[]>;

  note: Note = new Note();
  submitted = false;

  filieres = [ {name : "Math", value :"Math"}, {name : "Physique", value :"Physique"},{name : "arabic", value :"arabic"},{name : "english", value :"english"}];

  @ViewChild('htmlData') htmlData:ElementRef;


  constructor(private serviceNote: NotesService,private stagiaireService: StagiaireService,
    private router: Router) { }

  ngOnInit() {

    this.reloadData();

  }

  reloadData() {
    this.stagiaires = this.stagiaireService.getStagiairesList();
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

  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a2');
    doc.setFontSize(25);
    doc.text(520, 50, 'Liste Stagiaires');
    doc.fromHTML(DATA.innerHTML,140,60);
    doc.output('dataurlnewwindow');

    doc.setLineWidth(500);
  }


  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a2');
    doc.setFontSize(25);
    doc.text(520, 50, 'Liste Stagiaires');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,60,60,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('Liste-stagiaire.pdf');
  }



}
