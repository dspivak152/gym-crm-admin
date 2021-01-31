import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseTypeModalComponent } from '../../components/modals/exercise-type-modal/exercise-type-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  openDynamicModal(component: any) {
    this.modalService.open(component, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openExerciseTypeModal() {
    this.openDynamicModal(ExerciseTypeModalComponent);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
