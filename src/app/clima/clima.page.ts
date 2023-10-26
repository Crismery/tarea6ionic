import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  weather: any = {};

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadWeather();
  }

  loadWeather() {
    this.weatherService.getWeather().subscribe(
      (data: any) => {
        this.weather = data;
        console.log('Datos del clima:', data);
      },
      (error) => {
        console.error('Error al obtener datos del clima:', error);
      }
    );
  }
}
