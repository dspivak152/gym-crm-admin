import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseTypeService {

  constructor(private http: HttpClient) { }

  getAllExTypes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/exTypes');
  }
}
