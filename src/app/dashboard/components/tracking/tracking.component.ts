import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mg-tracking',
  templateUrl: './tracking.component.html',
})
export class TrackingComponent {
  height = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  bmi: number | null = null;

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
  }
}
