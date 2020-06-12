import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/app/classe/reclamation';
import { RecServiceService } from 'src/app/recService.service';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-liste-Reclamation',
  templateUrl: './liste-Reclamation.component.html',
  styleUrls: ['./liste-Reclamation.component.css']
})
export class ListeReclamationComponent implements OnInit {
  reclamations: Observable<Reclamation[]>;

  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();

  constructor(private recServiceService: RecServiceService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.reclamations = this.recServiceService.getReclamationsList();
  }

  deleteReclamation(id: number) {
    this.recServiceService.deleteReclamation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
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
