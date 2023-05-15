import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';
import { FormComponent } from './template/form/form.component';
import { FooterComponent } from './template/footer/footer.component';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { OficinaComponent } from './pages/oficina/oficina.component';
import { UtilesEscolaresComponent } from './pages/utiles-escolares/utiles-escolares.component';
import { ManualidadesComponent } from './pages/manualidades/manualidades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { NuevoContactoComponent } from './paginas/nuevo-contacto/nuevo-contacto.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListFormulariosComponent } from './pages/list-formularios/list-formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FormComponent,
    FooterComponent,
    ListContactosComponent,
    TecnologiaComponent,
    InicioComponent,
    AcercaDeComponent,
    OficinaComponent,
    UtilesEscolaresComponent,
    ManualidadesComponent,
    ContactoComponent,
    NuevoContactoComponent,
    FormularioComponent,
    ListFormulariosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
