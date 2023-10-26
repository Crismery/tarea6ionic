import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  age: number;
}

@Component({
  selector: 'app-detector-edad',
  templateUrl: './detector-edad.page.html',
  styleUrls: ['./detector-edad.page.scss'],
})
export class DetectorEdadPage implements OnInit {
  private apiUrl = 'https://api.agify.io/?name=';
  nombre: string = "";
  edad: number = 0;
  estado: string = "";
  imagen: string = "";

  constructor(private http: HttpClient) { }

  calcularEdad() {
    this.http.get<ApiResponse>(this.apiUrl + this.nombre).subscribe(
      data => {
        this.edad = data.age;
        this.determinarEstado();
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

  private determinarEstado() {
    if (this.edad < 18) {
      this.estado = 'joven';
      this.imagen = 'assets/joven.jpg';
    } else if (this.edad >= 18 && this.edad < 60) {
      this.estado = 'adulto';
      this.imagen = 'assets/adulta.jpg';
    } else {
      this.estado = 'anciano';
      this.imagen = 'assets/anciano.jpg';
    }
  }

  ngOnInit() {
  }
}
