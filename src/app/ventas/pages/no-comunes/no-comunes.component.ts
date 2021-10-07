import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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

  // slice pipe
  cambiarPersona(): void {
    if (this.nombre === 'Miguel' && this.genero === 'masculino') {
      this.nombre = 'María';
      this.genero = 'femenino';
    }
    else {
      this.nombre = 'Miguel';
      this.genero = 'masculino';
    }
  }

  anadirCliente(): void {
    this.clientes.push('');
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  // key value pipe
  persona = {
    nombre: 'Miguel',
    edad: 22,
    direccion: 'Muros de Nalón, Asturias'
  }

  // json pipe
  heroes = [
    {
      nombre: 'Superman',
      poder: 'Vivir en un mundo de papel'
    },
    {
      nombre: 'Batman',
      poder: 'Ser batman'
    },
    {
      nombre: 'Wonder Woman',
      poder: 'Tener una pelicula de DC que no es mala'
    }
  ];

  // async pipe
  miObservable = interval(1000); // Emite los valores 0,1,2,3...
  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 5000);
  });

  // Estas lineas de codigo html seria para intentar hacer lo mismo que en la promesa
  // pero no funcionaria porque los observables se instancian cada vez que alguien se 
  // subscribe por lo tanto el miObservable del ngIf no estaria sincronizado con el que
  // se muestra porque serian dos instancias diferentes
  
  // <pre *ngIf="!(miObservable | async)"> Resolviendo observable...
  // <pre>{{ miObservable | async }}</pre>
}
