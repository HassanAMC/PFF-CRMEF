import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeTable } from 'src/app/classe/TimeTable';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-emploiGestionnaires',
  templateUrl: './emploiGestionnaires.component.html',
  styleUrls: ['./emploiGestionnaires.component.css']
})
export class EmploiGestionnairesComponent  {


  addSemestres = [
    { id: 'S1', name: 'S1' },
    { id: 'S2', name: 'S2' }
    ];

  addFilieres = [
    { id: 1, name: 'Arabic' }, { id: 2, name: 'Francais' },
    { id: 3, name: 'Geographie' }, { id: 4, name: 'English' },
    { id: 5, name: 'Math' }, { id: 6, name: 'Physique' },
    { id: 7, name: 'Svt' }, { id: 8, name: 'Philosophie' },
    { id: 9, name: 'Islamic' }
  ];

  addGroupes = [
    { id: '1', name: 'G1' },
    { id: '2', name: 'G2' }
  ];

  selectedFile: File;
  message: string;
  Semestre: any;
  filiere: any;
  groupe: any;
  semestre: any;

  constructor(private httpClient: HttpClient) { }

  timeTable = new TimeTable();

  // Gets called when the user selects an image
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  saveUpload(timeTable: TimeTable): Observable<any> {
    return this.httpClient.post('http://localhost:8081/TimeTable/upload', timeTable);
  }

  form = new FormGroup({  
    semestre : new FormControl('' , Validators.required),  
    filiere : new FormControl('' , Validators.required),  
    groupe : new FormControl('' , Validators.required)  
  }); 

  
  onSubmit() {
    this.saveUpload(this.timeTable)
        .subscribe( data => console.log('suceess!', data), error => console.log('error!', error));
    this.onUpload();
  }
  AdminForm(AdminInformation)  {
    this.timeTable.semestre = this.semestre.value;
    this.timeTable.filiere = this.filiere.value;
    this.timeTable.groupe = this.groupe.value;  
    console.log(this.timeTable);

    this.saveUpload(this.timeTable).subscribe(
      response => {  
        let result = response.json();  
        console.log(result);  
      response => {  
        if(result > 0)  
        {  
           alert("file upload successfully ");  
           this.form.get('fullName').setValue("");  
           this.form.get('email').setValue("");  
           this.form.get('profileImage').setValue("");  
        }  }})}
      
  // Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8081/TimeTable/upload' + this.timeTable.semestre, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Votre Emploi du temps est telecharger avec succès»';
        } else {
          this.message = 'échec du téléchargement';
        }
      });
  

    }
  
  
    
  
  }
