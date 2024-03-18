import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-fitness-chart',
  templateUrl: './fitness-chart.component.html',
})
export class FitnessChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: ChartOptions; 

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Calories ",
          data: [500, 600, 550, 700, 650, 800, 750]
        },
        {
          name: "Mileage",
          data: [5, 6, 5.5, 7, 6.5, 8, 7.5]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-03-11T00:00:00.000Z",
          "2024-03-12T00:00:00.000Z",
          "2024-03-13T00:00:00.000Z",
          "2024-03-14T00:00:00.000Z",
          "2024-03-15T00:00:00.000Z",
          "2024-03-16T00:00:00.000Z",
          "2024-03-17T00:00:00.000Z"
        ],
        axisTicks: {
          show: false
        },
        labels:{
          show: false
        }
        
      },
      yaxis: {
        axisTicks: {
          show: false
        },
        labels:{
          show: false,
        },
        axisBorder:{
          show: false
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  public generateData(baseval: number, count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
