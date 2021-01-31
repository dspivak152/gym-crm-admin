import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseType } from 'src/app/models/exercise-type';
import { ExerciseTypeService } from '../../../services/workouts/exercise-type.service';
import { ModalService } from '../../../services/model/modal-service.service';
@Component({
  selector: 'app-exercise-type',
  templateUrl: './exercise-type.component.html',
  styleUrls: ['./exercise-type.component.css']
})
export class ExerciseTypeComponent implements OnInit {
  ExTypes$: Observable<ExerciseType[]>;
  closeResult: string;
  constructor(private exTypeService: ExerciseTypeService,
    private modalService: ModalService) { }

  ngOnInit(): void {
    this.ExTypes$ = this.exTypeService.getAllExTypes();
  }

  createNewType(content) {
    this.modalService.openExerciseTypeModal();
    // this.modalService.open(ExerciseTypeModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
    // this.exTypeService.createExType().subscribe(result => {
    //   this.ExTypes$ = result;
    // });
  }

  isListVisible(ExTypes: ExerciseType[]): boolean {
    return !!ExTypes && ExTypes.length > 0;
  }
}
