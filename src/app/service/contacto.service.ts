import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  
  contactos: Contacto[] = []
  constructor() { }

  save(contacto: Contacto){
    this.contactos.push(contacto)
    console.log(this.contactos)
  }

  getList(){
    return this.contactos
  }

}
