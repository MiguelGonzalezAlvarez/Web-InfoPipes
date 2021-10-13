import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  onMayus: boolean = true;

  toggleMayus() {
    this.onMayus = !this.onMayus;
  }

}
