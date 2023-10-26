import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://api.weatherunlocked.com/api/current/18.4888,-69.8574?app_id=363023ee&app_key=034fbd1c8b74ec5489658a04dbfcd0a4';

  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(this.apiUrl);
  }
}