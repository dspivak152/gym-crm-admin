import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { ExerciseTypeComponent } from './components/workouts/exercise-type/exercise-type.component';
import { WorkoutManagementComponent } from './components/workouts/workout-management/workout-management.component';
import { ExercisesComponent } from './components/workouts/exercises/exercises.component';
import { RoundsComponent } from './components/workouts/rounds/rounds.component';
import { WorkoutTypeComponent } from './components/workouts/workout-type/workout-type.component';
import { WorkoutsComponent } from './components/workouts/workouts/workouts.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseTypeModalComponent } from './components/modals/exercise-type-modal/exercise-type-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    ExerciseTypeComponent,
    WorkoutManagementComponent,
    ExercisesComponent,
    RoundsComponent,
    WorkoutTypeComponent,
    WorkoutsComponent,
    ExerciseTypeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
