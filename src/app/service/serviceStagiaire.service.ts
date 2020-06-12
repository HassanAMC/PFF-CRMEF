import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceStagiaireService {


  private baseUrl = 'http://localhost:8081/api/v1/stagiaires';

  constructor(private http: HttpClient) { }

  getStagiaire(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${4}`);
  }

  createStagiaire(stagiaires: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stagiaires);
  }

  updateStagiaire(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStagiaire(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStagiaireList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
