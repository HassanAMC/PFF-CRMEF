import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-emploiStg',
  templateUrl: './emploiStg.component.html',
  styleUrls: ['./emploiStg.component.css']
})
export class EmploiStgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
