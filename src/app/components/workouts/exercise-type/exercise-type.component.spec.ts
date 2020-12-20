import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseTypeService } from 'src/app/services/workouts/exercise-type.service';

import { ExerciseTypeComponent } from './exercise-type.component';

describe('ExerciseTypeComponent', () => {
  let component: ExerciseTypeComponent;
  let fixture: ComponentFixture<ExerciseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTypeComponent],
      providers: [{ provide: HttpClient, useValue: null }]
    })
      .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ExerciseTypeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   component.types = [];
  //   expect(component).toBeTruthy();

  // });
});
