import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from '../../service/contacto.service';
import { NavigationExtras, Router } from '@angular/router';
import { PersonasService } from 'src/app/service/personas.service';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss']
})
export class ListContactosComponent implements OnInit{
  
  listadoContactos: Contacto[] = []
  listadoContactosWS = new Subject<any[]>()

  constructor(private contactoService: ContactoService, 
    private srv:ContactoService,
    private personasService: PersonasService,
    private router: Router){
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
  }

  //se ejecuta antes que la vista se cargue
  ngOnInit(): void {
   // this.listadoContactosWS.next (this.personasService.getAll())
    this.personasService.getAll().subscribe(responde=>{
      this.listadoContactos=responde;
    })
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

  getTasks() {
    this.listadoContactos = [];
    console.log('aqui');
    const lista: Contacto[] = JSON.parse(
      localStorage.getItem('contactos')!
    );

    lista.forEach((element) => {
      this.listadoContactos.push(element);
    });
  }

  
  update(actual:any) {
   
    this.srv.contactoActual = actual;
    this.router.navigate(['paginas/actualizarcontacto'])
    
  }
  
  eliminar1(contacto: Contacto) {
    console.log(contacto.cedula);
    this.personasService.delete(contacto.cedula).subscribe(response => {
      console.log(response)
      const personas = this.listadoContactos.filter((p:any) => p.cedula !== contacto.cedula);
      this.listadoContactos = personas;
    })
  }

}
