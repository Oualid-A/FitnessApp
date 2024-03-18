import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './meals.component';
import { NgModule } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MealsComponent,
  },
];

@NgModule({
  declarations: [MealsComponent],
  imports: [RouterModule.forChild(routes), NgIf, NgFor],
  exports: [RouterModule],
  providers: [],
})
export class MealsModule {}
