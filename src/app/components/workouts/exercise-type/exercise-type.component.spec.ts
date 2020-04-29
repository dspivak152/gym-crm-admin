import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTypeComponent } from './exercise-type.component';

describe('ExerciseTypeComponent', () => {
  let component: ExerciseTypeComponent;
  let fixture: ComponentFixture<ExerciseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
