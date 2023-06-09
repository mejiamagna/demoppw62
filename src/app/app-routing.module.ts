import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { UtilesEscolaresComponent } from './pages/utiles-escolares/utiles-escolares.component';
import { ManualidadesComponent } from './pages/manualidades/manualidades.component';
import { OficinaComponent } from './pages/oficina/oficina.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormComponent } from './template/form/form.component';
import { ListFormulariosComponent } from './pages/list-formularios/list-formularios.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ActFormularioComponent } from './pages/act-formulario/act-formulario.component';

const routes: Routes = [
  {path: "paginas/listacontactos", component: ListContactosComponent},
  {path: "paginas/nuevo-contacto", component: ContactoComponent},
  {path: "paginas/utilesescolares", component: UtilesEscolaresComponent},
  {path: "paginas/manualidades", component: ManualidadesComponent},
  {path: "paginas/oficina", component: OficinaComponent},
  {path: "paginas/tecnologia", component: TecnologiaComponent},
  {path: "paginas/nuevo-formulario", component: FormularioComponent},
  {path: "paginas/listaformularios", component: ListFormulariosComponent},
  {path: "paginas/nuevo-formulario:/id", component: FormularioComponent},
  {path: "paginas/actualizarformulario", component: ActFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
