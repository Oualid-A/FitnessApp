import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { NgModule } from '@angular/core';
import { TrainingService } from '../training-types/training.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
];

@NgModule({
  declarations: [CalendarComponent],
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [TrainingService],
})
export class CalendarModule {}
