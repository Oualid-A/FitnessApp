import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {
  _apiUrl = environment.apiUrl;
  _apiKey = environment.rapidApiKey;

  private readonly http = inject(HttpClient);

  public getTrainingData(selectedValue: string): Observable<Exercise[]> {
    const options = {
      params: { limit: '10' },
      headers: {
        'X-RapidAPI-Key': this._apiKey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };
    return this.http.get<Exercise[]>(
      `${this._apiUrl}${selectedValue}`,
      options
    );
  }


}
