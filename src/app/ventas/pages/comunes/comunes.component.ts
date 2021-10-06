import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [
  ]
})
export class ComunesComponent {

  nombreLower: string = 'miguel';
  nombreUpper: string = 'MIGUEL';
  nombreTitle: string = 'MiGuel GonZaleZ AlVaRez';

  fecha: Date = new Date();

}
