import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecServiceService } from 'src/app/recService.service';
import { Reclamation } from 'src/app/classe/reclamation';

@Component({
  selector: 'app-listRecComponent',
  templateUrl: './listRecComponent.component.html',
  styleUrls: ['./listRecComponent.component.css']
})
export class ListRecComponentComponent implements OnInit {

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

  /*reclamationDetails(id: number){
    this.router.navigate(['details', id]);
  }*/
}
