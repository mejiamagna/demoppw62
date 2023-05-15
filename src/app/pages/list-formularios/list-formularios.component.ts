import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Formulario } from 'src/app/domain/form';
import { FormService } from 'src/app/service/form.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-list-formularios',
  templateUrl: './list-formularios.component.html',
  styleUrls: ['./list-formularios.component.scss']
})
export class ListFormulariosComponent {

  listadoFormularios: Formulario[] = []

  constructor(private FormService: FormService, private router: Router){
    this.listadoFormularios = FormService.getList()
    console.log('listadoFormularios', this.listadoFormularios)
  }

  editar(formulario: Formulario){
    console.log(formulario)
    let params: NavigationExtras = {
      queryParams: {
        formulario: formulario,
        nombre: 'Magna'
      }
    }
    this.router.navigate(['paginas/nuevo-formulario'], params)
  }

  eliminar(formulario: Formulario){
    
  }
}
