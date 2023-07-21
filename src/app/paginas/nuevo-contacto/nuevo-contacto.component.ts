import { Component } from '@angular/core';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from '../../service/contacto.service';
import { PersonasService } from 'src/app/service/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss']
})
export class NuevoContactoComponent {
  contacto: Contacto = new Contacto();

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
  }
}