import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-predictor-genero',
  templateUrl: './predictor-genero.page.html',
  styleUrls: ['./predictor-genero.page.scss'],
})
export class PredictorGeneroPage implements OnInit {
  nombre: string = '';
  generoPredicho: string = '';

  constructor(private http: HttpClient) { }
  predecirGenero() {
    this.http.get(`https://api.genderize.io/?name=${this.nombre}`)
      .subscribe((data: any) => {
        this.generoPredicho = data.gender;
      });
  }

  ngOnInit() {
  }

}
