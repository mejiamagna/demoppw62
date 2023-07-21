import { Component } from '@angular/core';
import { Contacto } from '../../domain/contacto';
import { ContactoService } from '../../service/contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from 'src/app/service/personas.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
 
  contacto: Contacto = new Contacto();

  cedula: string = '';
  nombre: string = '';
  direccion: string = '';


  constructor(private ContactoService: ContactoService, 
    private personasService: PersonasService,
    private router: Router) {
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contacto = new Contacto()
        this.contacto = params['contacto']
      }
    }

  guardar(){
    
    console.log(this.contacto)
    //this.ContactoService.save(this.contacto)
    this.personasService.save(this.contacto).subscribe(data => {
      console.log("resultado WS save", data);
    });
    this.contacto = new Contacto()

    this.limpiarCampos();
  }

  guardar2() {

    const valores: Contacto = {
      cedula: this.cedula,
      nombre: this.nombre,
      direccion: this.direccion,
    };
    console.log(`${this.cedula} ${this.nombre} ${this.direccion}`);
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

    
    this.personasService.save(valores).subscribe(data => {
      console.log("resultado WS save", data);
      if (data.codigo == 99) {
        Swal.fire("ERROR", data.mensaje, "warning");
      }
    });

    
    this.limpiarCampos();

    console.log(this.contacto);
    this.ContactoService.save(this.contacto);
    this.contacto = new Contacto();
  }

  limpiarCampos() {
    this.cedula = '';
    this.nombre = '';
    this.direccion = '';
  }
}
