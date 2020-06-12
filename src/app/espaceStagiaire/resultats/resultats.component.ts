import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotesService } from 'src/app/service/Notes.service';
import { Note } from 'src/app/classe/Note';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {

  note : Note = new Note();
 

  idNote: number;


 

  constructor(
    private router: Router, private noteservice: NotesService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.reloadData();

  }


  reloadData() {
    //this.stagiair=this.stgservice.getStagiaire(1);

    this.note = new Note();

    this.idNote = this.route.snapshot.params['idNote'];

    this.noteservice.getNote(this.idNote)
      .subscribe(data => {
        console.log(data)
        this.note = data;
      }, error => console.log(error));
  }


}
