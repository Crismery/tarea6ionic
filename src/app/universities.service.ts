import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {
  private apiUrl = 'http://universities.hipolabs.com/search';

  constructor(private http: HttpClient) {}

  getUniversitiesByCountry(country: string) {
    const url = `${this.apiUrl}?country=${country}`;
    return this.http.get(url);
  }
}