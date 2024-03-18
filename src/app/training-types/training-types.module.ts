import { RouterModule, Routes } from '@angular/router';
import { TrainingTypesComponent } from './training-types.component';
import { NgModule } from '@angular/core';
import { TrainingService } from './training.service';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: TrainingTypesComponent,
  },
];

@NgModule({
  declarations: [TrainingTypesComponent],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule,
    NgFor,
    NgIf
  ],
  exports: [RouterModule],
  providers: [TrainingService],
})
export class TrainingTypesModule {}
