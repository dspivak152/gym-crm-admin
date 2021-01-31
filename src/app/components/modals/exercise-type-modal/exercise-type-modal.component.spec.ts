import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTypeModalComponent } from './exercise-type-modal.component';

describe('ExerciseTypeModalComponent', () => {
  let component: ExerciseTypeModalComponent;
  let fixture: ComponentFixture<ExerciseTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
