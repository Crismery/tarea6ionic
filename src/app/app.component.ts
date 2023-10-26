import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Caja de hermienta', url: '/herramienta', icon: 'file-tray-stacked' },
    { title: 'Predictor de genero', url: '/predictor-genero', icon: 'transgender' },
    { title: 'Detector edad', url: '/detector-edad', icon: 'accessibility' },
    { title: 'Universidades RD', url: '/paises', icon: 'earth' },
    { title: 'Clima', url: '/clima', icon: 'partly-sunny' },
    { title: 'WordPress', url: '/wordpress', icon: 'globe' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'people-circle' },
  
  ];
  
  constructor() {}
}
