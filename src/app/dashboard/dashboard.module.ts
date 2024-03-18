import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule, provideRouter } from '@angular/router';
import { TrackingComponent } from './components/tracking/tracking.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TrainingTypesComponent } from './components/training-types/training-types.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MealsComponent } from './components/meals/meals.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { NgApexchartsModule } from "ng-apexcharts";
import { FitnessChartComponent } from './components/tracking/containers/fitness-chart/fitness-chart.component';
import { MatMenuModule } from "@angular/material/menu";
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { TrainingService } from './training.service';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule, View } from '@syncfusion/ej2-angular-schedule';
import { WeekService, MonthService} from '@syncfusion/ej2-angular-schedule';
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
  declarations: [TrackingComponent, CalendarComponent, TrainingTypesComponent, MealsComponent, FitnessChartComponent],
  imports: [RouterModule.forChild(routes),
  MatIconModule,    MatFormFieldModule,
  MatInputModule,
  NgIf,
  NgFor,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
  MatTableModule, 
  MatPaginatorModule,
  MatCardModule,
  NgApexchartsModule,
  MatMenuModule,
  MatTabsModule,
  HttpClientModule, 
  MatChipsModule,  
],
  exports: [RouterModule],
  providers:[TrainingService]
})
export class DashboardModule {}
