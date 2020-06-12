import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl = 'http://localhost:8081/api/v1/notes';

  constructor(private http: HttpClient) { }
  getNote(idN: number): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/${10}`);
  }

  createNote(Note: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Note);
  }

  updateNote(idN: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${idN}`, value);
  }

  deleteNote(idN: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idN}`, { responseType: 'text' });
  }

  getNoteList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  NotesList(): number {
    return this.http.get(`${this.baseUrl}`).subscribe.length;
  }


}
