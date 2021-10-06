import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18n select
  nombre: string = 'Miguel';
  genero: string = 'masculino';
  invitacionMapper = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18n plural
  clientes: string[] = ['María', 'Pedro', 'Luis'];
  clientesMapper = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

}
