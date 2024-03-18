import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../training.service';

@Component({
  selector: 'mg-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  programs: any[] = [];

  constructor(private dataService: TrainingService) {}

  ngOnInit(): void {
    this.dataService.getPrograms().subscribe((data) => {
      this.programs = data;
      console.log(this.programs);
      
    });
  }
}
