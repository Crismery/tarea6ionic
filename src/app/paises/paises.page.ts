import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../universities.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit {

  universities: any[] = [];

  constructor(private universitiesService: UniversitiesService) {}

  ngOnInit() {
    this.loadUniversities('Dominican Republic');
  }

  loadUniversities(country: string) {
    this.universitiesService.getUniversitiesByCountry(country).subscribe((data: any) => {
      this.universities = data;
    });
  }

  openUniversityPage(url: string) {
    // Abre la página web de la universidad en un navegador externo
    window.open(url, '_blank');
  }
}

