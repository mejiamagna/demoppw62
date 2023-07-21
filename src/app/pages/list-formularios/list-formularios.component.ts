import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Formulario } from 'src/app/domain/form';
import { FormService } from 'src/app/service/form.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormularioContactos } from 'src/app/model/Form-model';

@Component({
  selector: 'app-list-formularios',
  templateUrl: './list-formularios.component.html',
  styleUrls: ['./list-formularios.component.scss'],
})
export class ListFormulariosComponent implements OnInit {
  // listadoFormularios: Formulario[] = [];

  listadoFormularios: FormularioContactos[] = [];
  listadoFormulariosFire: any;
  listadoFormulariosWS: any;

  constructor(private FormService: FormService, private router: Router,private srv:FormService) {
    this.listadoFormularios = FormService.getList();
    console.log('listadoFormularios', this.listadoFormularios);
    
    this.listadoFormulariosFire = FormService.getAll()

  }
  ngOnInit(): void {
    this.getTasks();
  }

  /*editar(formulario: Formulario) {
    console.log(formulario);
    let params: NavigationExtras = {
      queryParams: {
        formulario: formulario,
        nombre: 'Magna',
      },
    };
    this.router.navigate(['paginas/nuevo-formulario'], params);
  }*/

  eliminar(formulario: Formulario) {
      for (let i = 0; i < this.listadoFormularios.length; i++) {
        if (formulario == this.listadoFormularios[i]) {
          this.listadoFormularios.splice(i, 1);
          localStorage.setItem('contactos', JSON.stringify(this.listadoFormularios));
        }
      }
  }

  eliminar1(formulario: Formulario) {
    this.FormService.delete(formulario.uid)
  }
  
  getTasks() {
    this.listadoFormularios = [];
    console.log('aqui');
    const lista: FormularioContactos[] = JSON.parse(
      localStorage.getItem('contactos')!
    );

    lista.forEach((element) => {
      this.listadoFormularios.push(element);
    });
  }

  update(actual:any) {
    this.srv.formularioActual = actual;
    this.router.navigate(['paginas/actualizarformulario'])
  }
}