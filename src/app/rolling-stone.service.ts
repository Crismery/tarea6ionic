import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RollingStoneService {
  private apiUrl = 'https://es.rollingstone.com/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  getLatestPosts() {
    return this.http.get(this.apiUrl, { params: { per_page: '3' } });
  }
}
