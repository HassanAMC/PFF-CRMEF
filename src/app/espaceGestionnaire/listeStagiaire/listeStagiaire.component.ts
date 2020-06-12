import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Stagiaire } from 'src/app/classe/stagiaire';
import { StagiaireService } from 'src/app/service/Stagiaire.service';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listeStagiaire',
  templateUrl: './listeStagiaire.component.html',
  styleUrls: ['./listeStagiaire.component.css']
})
export class ListeStagiaireComponent implements OnInit {
  stagiaires: Observable<Stagiaire[]>;
  


  constructor(private stagiaireService: StagiaireService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.stagiaires = this.stagiaireService.getStagiairesList();
  }

  deleteStagiaire(idStag: number) {
    this.stagiaireService.deleteStagiaire(idStag)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  stagiaireDetails(idStag: number) {
    this.router.navigate(['gestionnaire/details/stagiaire', idStag]);
  }
  updateStagiaire(idStag: number) {
    this.router.navigate(['gestionnaire/update/stagiaire', idStag]);
  }

  @ViewChild('htmlData') htmlData:ElementRef;

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
