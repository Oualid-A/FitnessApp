import { Component, OnInit } from '@angular/core';
import { meals } from './meals';

@Component({
  selector: 'mg-meals',
  templateUrl: './meals.component.html',
  styleUrls:['./meals.component.css']
})
export class MealsComponent implements OnInit{
  meals: any;
  ngOnInit(): void {
    this.meals = meals;
  }
}
