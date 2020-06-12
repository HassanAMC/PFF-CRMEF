import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private baseUrl = 'http://localhost:8081/api/v1/stagiaires';

  constructor(private http: HttpClient) { }

  getStagiaire(codeApoge: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${codeApoge}`);
  }

  createStagiaire(stagiaire: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stagiaire);
  }

  updateStagiaire(codeApoge: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${codeApoge}`, value);
  }

  deleteStagiaire(codeApoge: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${codeApoge}`, { responseType: 'text' });
  }

  getStagiairesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  StagiairesList(): number {
    return this.http.get(`${this.baseUrl}`).subscribe.length;
  }

}
