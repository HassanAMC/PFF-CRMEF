import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Formateur } from 'src/app/classe/formateur';
import { Observable } from 'rxjs';
import { StagiaireService } from 'src/app/service/Stagiaire.service';
import { Router } from '@angular/router';
import { FormateurService } from 'src/app/service/formateur.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-listeFormateur',
  templateUrl: './listeFormateur.component.html',
  styleUrls: ['./listeFormateur.component.css']
})
export class ListeFormateurComponent implements OnInit {

  formateurs: Observable<Formateur[]>;

  constructor(private serviceFormateur: FormateurService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.formateurs = this.serviceFormateur.getFormateurList();
  }

  deleteFormateur(f: number) {
    this.serviceFormateur.deleteFormateur(f)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  formateurDetails(idf: number) {
    this.router.navigate(['gestionnaire/details_formateur', idf]);
  }
  updateFormateur(idf: number) {
    this.router.navigate(['gestionnaire/update_formateur', idf]);
  }


  
  @ViewChild('htmlData') htmlData:ElementRef;

  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a2');
    doc.setFontSize(25);
    doc.text(520, 50, 'Liste Formateurs');
    doc.fromHTML(DATA.innerHTML,140,60);
    doc.output('dataurlnewwindow');

    doc.setLineWidth(500);
  }


  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a2');
    doc.setFontSize(25);
    doc.text(520, 50, 'Liste Formateurs');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,60,60,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('Liste-Formateurs.pdf');
  }

}
