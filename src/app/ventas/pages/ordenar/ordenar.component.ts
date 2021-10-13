import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  onMayus: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Wonder Woman',
      vuela: true,
      color: Color.rojo
    },
  ];

  toggleMayus(): void {
    this.onMayus = !this.onMayus;
  }

  cambiarOrden(orden: string): void {
    this.ordenarPor = orden;
  }

}
