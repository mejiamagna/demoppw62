import { Component } from '@angular/core';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from '../../service/contacto.service';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/service/personas.service';

@Component({
  selector: 'app-act-contacto',
  templateUrl: './act-contacto.component.html',
  styleUrls: ['./act-contacto.component.scss']
})
export class ActContactoComponent {

  contacto: Contacto = new Contacto();

  cedula: string = '';
  nombre: string = '';
  direccion: string = '';


  contactoActualizar: any;
  constructor(private ContactoService: ContactoService,
    private personasService: PersonasService, 
    private router: Router,
    private srv:ContactoService) {
    // this.listadoFormularios = FormService.getList();
    // console.log('listadoFormularios', this.listadoFormularios);

  }
  ngOnInit(): void {
    console.log(this.srv.contactoActual)
    this.contactoActualizar=this.srv.contactoActual
  }

  actualizar1(){
    
    console.log(this.contactoActualizar)
    //this.ContactoService.save(this.contacto)
    this.personasService.save(this.contactoActualizar).subscribe(data => {
      console.log("resultado WS save", data);
    });
    this.contacto = new Contacto()

    this.limpiarCampos();
  }
  


  actualizar() {

    //const myId = uuid();

    const valores: Contacto = {
      //id: myId,
      cedula: this.cedula,
      nombre: this.nombre,
      direccion: this.direccion,
    };
    console.log(`${this.cedula} ${this.nombre}  ${this.direccion}`);
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
    this.cedula = '';
    this.nombre = '';
    this.direccion = '';
  }

}
