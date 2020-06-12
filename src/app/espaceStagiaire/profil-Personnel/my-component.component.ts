import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../../classe/reclamation';
import { Router, ActivatedRoute } from '@angular/router';
import { RecServiceService } from '../../service/recService.service';
import { Stagiaire } from '../../classe/stagiaire';
import { Observable } from 'rxjs';
import { ServiceStagiaireService } from '../../service/serviceStagiaire.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  reclamation: Reclamation = new Reclamation();


  submitted = false;
  selected: string;
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  idStag: number;
  stagiaire: Stagiaire;

  options = [
    { name: "Note", value: 1 },
    { name: "info", value: 2 }
  ]
  filieres = [ {name : "Math", value :"Math"}, {name : "Physique", value :"Physique"},{name : "arabic", value :"arabic"},{name : "english", value :"english"}];


  constructor(private reclamationService: RecServiceService,
    private router: Router, private stgservice: ServiceStagiaireService, private route: ActivatedRoute,config: NgbModalConfig, private modalService: NgbModal) {


    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    config.backdrop = 'static';
    config.keyboard = false;

  }

  ngOnInit() {

    this.reloadData();

  }

  open(content) {
    this.modalService.open(content);
  }

  reloadData() {
    //this.stagiair=this.stgservice.getStagiaire(1);

    this.stagiaire = new Stagiaire();

    this.idStag = this.route.snapshot.params['idStg'];

    this.stgservice.getStagiaire(this.idStag)
      .subscribe(data => {
        console.log(data)
        this.stagiaire = data;
      }, error => console.log(error));
  }


  save() {
    this.reclamationService.createReclamation(this.reclamation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.reclamation = new Reclamation();
    this.gotoList();
  }

  onSubmit() {

    this.save();
  }

  gotoList() {
    this.router.navigate(['/Reclamations']);
  }

}/**    <select class="custom-select" id="inputGroupSelect04" name="etat"  aria-label="Example select with button addon" [(value)]="reclamation.etat">
                  <option *ngFor="let o of options">
                    {{o.name}}
                 </option>

                </select> */