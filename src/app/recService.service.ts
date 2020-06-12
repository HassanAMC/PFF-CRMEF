import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecServiceService {

  private baseUrl = 'http://localhost:8080/api/v1/reclamations';

  constructor(private http: HttpClient) { }

  getReclamation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createReclamation(reclamation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, reclamation);
  }

  updateReclamation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteReclamation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getReclamationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
