import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingComponent } from './components/tracking/tracking.component';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FitnessChartComponent } from './components/tracking/fitness-chart/fitness-chart.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { TrackingService } from './components/tracking/tracking.service';
import { IgxInputGroupModule } from 'igniteui-angular';

const routes: Routes = [
  {
    path: '',
    component: TrackingComponent,

    children: [
      {
        path: 'tracking',
        component: TrackingComponent,
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
  declarations: [TrackingComponent, FitnessChartComponent],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
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
    MatIconModule,
    ReactiveFormsModule,
    IgxInputGroupModule,
  ],
  exports: [RouterModule],
  providers: [TrackingService],
})
export class DashboardModule {}
