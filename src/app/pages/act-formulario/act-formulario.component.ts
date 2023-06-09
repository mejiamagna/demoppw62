import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/domain/form';
import { FormService } from '../../service/form.service';
import { Router } from '@angular/router';
import { FormularioContactos } from 'src/app/model/Form-model';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-act-formulario',
  templateUrl: './act-formulario.component.html',
  styleUrls: ['./act-formulario.component.scss']
})
export class ActFormularioComponent implements OnInit{

  formulario: Formulario = new Formulario();

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  formActualizar: any;
  constructor(private FormService: FormService, private router: Router,private srv:FormService) {
    // this.listadoFormularios = FormService.getList();
    // console.log('listadoFormularios', this.listadoFormularios);

  }
  ngOnInit(): void {
    console.log(this.srv.formularioActual)
    this.formActualizar=this.srv.formularioActual
  }


  actualizar() {
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
  }

  limpiarCampos() {
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
  

}
