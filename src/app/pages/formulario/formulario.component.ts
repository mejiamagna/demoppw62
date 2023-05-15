import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formulario } from 'src/app/domain/form';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  formulario: Formulario = new Formulario();

  constructor(private FormService: FormService,
    private router: Router) {
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.formulario = new Formulario()
        this.formulario = params['formulario']
      }
    }

  guardar(){
    
    console.log(this.formulario)
    this.FormService.save(this.formulario)
    this.formulario = new Formulario()
  }
}
