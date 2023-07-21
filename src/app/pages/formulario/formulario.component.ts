import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formulario } from 'src/app/domain/form';
import { FormularioContactos } from 'src/app/model/Form-model';
import { FormService } from 'src/app/service/form.service';

import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  
  formulario: Formulario = new Formulario();

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  constructor(private FormService: FormService, private router: Router) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.formulario = new Formulario();
      this.formulario = params['formulario'];
    }
  }

  guardar() {
    console.log(this.formulario);
   
   /* //this.FormService.save(this.formulario);
    this.personasService.save(this.formulario).suscribe(data => {

    })

    */
    this.formulario = new Formulario();
  }

  guardar2() {
    const myId = uuid();

    const valores: FormularioContactos = {
      id: myId,
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje,
    };
    console.log(`${this.nombre} ${this.correo} ${this.mensaje}`);
    console.log(valores);

    let contactos = [];
    if (localStorage.getItem('contactos') === null) {
      contactos = [];
      contactos.push(valores);
      localStorage.setItem('contactos', JSON.stringify(contactos));
    } else {
      contactos = JSON.parse(localStorage.getItem('contactos')!);
      contactos.push(valores);
      localStorage.setItem('contactos', JSON.stringify(contactos));
    }
    this.limpiarCampos();

    console.log(this.formulario);
    this.FormService.save(this.formulario);
    this.formulario = new Formulario();
  }

  limpiarCampos() {
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}