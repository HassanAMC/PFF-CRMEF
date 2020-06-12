import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private baseUrl = 'http://localhost:8081/api/v1/formateurs';

  constructor(private http: HttpClient) { }

  getFormateur(idformateur: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idformateur}`);
  }

  createFormateur(formateur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, formateur);
  }

  updateFormateur(idformateur: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${idformateur}`, value);
  }

  deleteFormateur(idformateur: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idformateur}`, { responseType: 'text' });
  }

  getFormateurList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
