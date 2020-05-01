import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutManagementComponent } from './components/workouts/workout-management/workout-management.component';

const routes: Routes = [
  { path: 'workouts-mng', component: WorkoutManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
