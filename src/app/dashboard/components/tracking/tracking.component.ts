import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA, FoodItem } from './tracking.modell';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'mg-tracking',
  templateUrl: './tracking.component.html',
})
export class TrackingComponent {

  height = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);
  classification: string;
  bmi: number = 0;
  stepsCount: number = 9870;
  distanceCovered: number = 8.5; 
  caloriesBurned: number = 530;
  workoutsCompleted: number = 5;
  displayedColumns: string[] = ['name', 'protein', 'calories', 'fat'];
  dataSource = new MatTableDataSource<FoodItem>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  calculate() {
    const heightMeters = this.height.value;
    const weightKg = this.weight.value;

    if (heightMeters && weightKg) {
      const heightMetersNumber = parseFloat(heightMeters);
      const weightKgNumber = parseFloat(weightKg);

      if (!isNaN(heightMetersNumber) && !isNaN(weightKgNumber)) {
        this.bmi =
          weightKgNumber /
          ((heightMetersNumber / 100) * (heightMetersNumber / 100));
      }
    }
    if (this.bmi < 16) {
      this.classification = 'Severe thinness';
    } else if (this.bmi > 16 && this.bmi < 30) {
      this.classification = 'Normal weight';
    } else {
      this.classification = 'Overweight ';
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
