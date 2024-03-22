import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  private query = '1lb brisket and fries';

  private apiUrl = `${environment.nutritionApiUrl}?query=${this.query}`;
  private apiKey = environment.nutritionApiKey;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
