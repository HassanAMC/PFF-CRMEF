import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {

  private baseUrl = 'http://localhost:8081/api/v1/formateurs';

  constructor(private http: HttpClient) { }

  getFormateur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${3}`);
  }

  createFormateur(reclamation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, reclamation);
  }

  updateFormateur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFormateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFormateurList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
