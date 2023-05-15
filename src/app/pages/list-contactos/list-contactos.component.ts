import { Component } from '@angular/core';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from '../../service/contacto.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss']
})
export class ListContactosComponent {
  
  listadoContactos: Contacto[] = []

  constructor(private contactoService: ContactoService, private router: Router){
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
  }

  editar(contacto: Contacto){
    console.log(contacto)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Magna'
      }
    }
    this.router.navigate(['paginas/nuevo-contacto'], params)
  }

  eliminar(contacto: Contacto){
    
  }
}
