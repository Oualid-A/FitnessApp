import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { TrainingService } from '../../training.service';
import { Exercise } from './exercise.model';

@Component({
  selector: 'mg-training-types',
  templateUrl: './training-types.component.html',
})
export class TrainingTypesComponent {
  responseData: Exercise[];

  chipListControl = new FormControl();

  selectedValue: string = 'Back';
  private readonly http = inject(HttpClient);
  private readonly trainingService = inject(TrainingService);

  ngOnInit() {
    this.chipListControl.valueChanges.subscribe((value) => {
      this.selectedValue = value;
    });

    this.trainingService.getTrainingData(this.selectedValue).subscribe(
      (response: any) => {
        this.responseData = response;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sendRequest(): void {
    this.trainingService.getTrainingData(this.selectedValue).subscribe(
      (response: Exercise[]) => {
        this.responseData = response;
        console.log(this.responseData);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


