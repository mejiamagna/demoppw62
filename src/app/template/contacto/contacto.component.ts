import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  
  constructor(private router: Router){
  }

  listar() {
    this.router.navigate(['paginas/listacontactos'])
  }

  nuevo() {
    this.router.navigate(['paginas/nuevo-contacto'])
  }
}
