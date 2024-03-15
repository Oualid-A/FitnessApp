import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule, provideRouter } from '@angular/router';
import { TrackingComponent } from './components/tracking/tracking.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TrainingTypesComponent } from './components/training-types/training-types.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MealsComponent } from './meals/meals.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: 'tracking',
        component: TrackingComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'training-types',
        component: TrainingTypesComponent,
      },
      {
        path: 'meals',
        component: MealsComponent,
      },
      {
        path: '',
        redirectTo: 'tracking',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  declarations: [TrackingComponent, CalendarComponent, TrainingTypesComponent, MealsComponent],
  imports: [RouterModule.forChild(routes),
  MatIconModule,    MatFormFieldModule,
  MatInputModule,
  NgIf,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule],
  exports: [RouterModule],
})
export class DashboardModule {}
