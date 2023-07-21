import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  save(contacto: Contacto){
    return this.http.post<any>("http://localhost:8080/parqueadero/rs/personas", contacto)
  }

  update(contacto: Contacto){
    return this.http.post<any>("http://localhost:8080/parqueadero/rs/personas", contacto)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/parqueadero/rs/personas/listarPersonas")
  }

  delete(cedula: string){
    //const url: string = `http://localhost:8080/parqueadero/rs/personas/${cedula}`
    return this.http.delete<HttpResponse<any>>(`http://localhost:8080/parqueadero/rs/personas/${cedula}`)
  }
}
