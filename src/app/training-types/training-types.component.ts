import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { TrainingService } from '../dashboard/training.service';
import { Exercise } from './exercise.model';

@Component({
  selector: 'mg-training-types',
  templateUrl: './training-types.component.html',
})
export class TrainingTypesComponent {
  responseData: Exercise[];

  chipListControl = new FormControl();

  selectedValue: string = 'lower legs';

  readonly #_trainingService = inject(TrainingService);

  ngOnInit() {
    this.chipListControl.valueChanges.subscribe((value) => {
      this.selectedValue = value;
    });
    this.sendRequest();
  }

  sendRequest(): void {
    this.#_trainingService
      .getTrainingData(this.selectedValue)
      .subscribe((response: Exercise[]) => {
        this.responseData = response;
      });
  }
}
