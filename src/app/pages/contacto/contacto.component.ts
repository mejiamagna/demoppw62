import { Component } from '@angular/core';
import { Contacto } from '../../domain/contacto';
import { ContactoService } from '../../service/contacto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
 
  contacto: Contacto = new Contacto();

  constructor(private ContactoService: ContactoService,
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
    this.ContactoService.save(this.contacto)
    this.contacto = new Contacto()
  }
}
