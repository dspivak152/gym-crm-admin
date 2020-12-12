import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ExerciseType } from 'src/app/models/exercise-type';
import { ExerciseTypeService } from './exercise-type.service';

describe('ExerciseTypeService', () => {
  let service: ExerciseTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: {} },
      { provide: ExerciseTypeService, useClass: {} }]
    });
    service = TestBed.inject(ExerciseTypeService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
