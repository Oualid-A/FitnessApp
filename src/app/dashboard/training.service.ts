import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exercise } from './components/training-types/exercise.model';

@Injectable()
export class TrainingService {
  apiUrl = environment.apiUrl;
  apiKey = environment.rapidApiKey;

  private readonly http = inject(HttpClient);

  public getTrainingData(selectedValue: string): Observable<Exercise[]> { 
    const options = {
      params: { limit: '10' },
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    console.log(selectedValue);
    return this.http.get<Exercise[]>(`${this.apiUrl}${selectedValue}`, options);

  }

  getPrograms(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/programs');
  }



}
