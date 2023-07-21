import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private router: Router){
  }

  listar() {
    this.router.navigate(['paginas/listaformularios'])
  }

  nuevo() {
    this.router.navigate(['paginas/nuevo-formulario'])
  }

  listarContacto() {
    this.router.navigate(['paginas/listacontactos'])
  }

  nuevoContacto() {
    this.router.navigate(['paginas/nuevo-contacto'])
  }
}


