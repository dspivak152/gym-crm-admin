import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExerciseType } from 'src/app/models/exercise-type';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseTypeService {

  constructor(private http: HttpClient) { }

  getAllExTypes(): Observable<ExerciseType[]> {
    return this.http.get<ExerciseType[]>('http://localhost:3000/api/exTypes');
  }

  createExType() {
    return this.http.post<any>('http://localhost:3000/api/exType', {});
  }
}
