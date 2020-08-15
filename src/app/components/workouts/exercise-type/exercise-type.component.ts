import { Component, OnInit } from '@angular/core';
import { ExerciseTypeService } from '../../../services/workouts/exercise-type.service';

@Component({
  selector: 'app-exercise-type',
  templateUrl: './exercise-type.component.html',
  styleUrls: ['./exercise-type.component.css']
})
export class ExerciseTypeComponent implements OnInit {
  types: any = [];
  constructor(private exTypeService: ExerciseTypeService) { }

  ngOnInit(): void {
    this.exTypeService.getAllExTypes().subscribe(result => {
      this.types = result;
    })
  }

}
