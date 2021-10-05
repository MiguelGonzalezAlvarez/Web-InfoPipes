import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'miguel gonzález';
  valor: number = 1000;
  objeto: Object = { nombre: 'Miguel' };

  mostrarNombre(): void {
    console.log(this.nombre);
  }
}
