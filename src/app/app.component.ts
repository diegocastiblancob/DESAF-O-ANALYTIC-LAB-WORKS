import { Component, OnInit } from '@angular/core';

/**
 * interfaz para controlar la navegacion en el sidenbar
 */
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
/**
 * rutas para la navegacion entre los componentes
 */
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: '', class: '' },
  { path: '/map', title: 'Mapa',  icon:'', class: '' },
  { path: '/commerce', title: 'Comerciantes',  icon:'', class: '' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DESAFIO-ANALYTIC-LAB-WORKS';
  menuItems: any[];
  date : Date = new Date()
  constructor() {
  }
  
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }


}
