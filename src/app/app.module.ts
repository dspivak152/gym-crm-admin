import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { ExerciseTypeComponent } from './components/workouts/exercise-type/exercise-type.component';
import { WorkoutManagementComponent } from './components/workouts/workout-management/workout-management.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    ExerciseTypeComponent,
    WorkoutManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
