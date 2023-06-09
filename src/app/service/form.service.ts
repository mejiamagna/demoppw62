import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Formulario } from 'src/app/domain/form';
import { FormularioContactos } from 'src/app/model/Form-model';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private dbPath = '/formularios'

  formularios: Formulario[] = []
  public formularioActual: any;

  formulariosRef: AngularFirestoreCollection<Formulario>;

  constructor(private db: AngularFirestore) { 
    this.formulariosRef = db.collection(this.dbPath);
  }

  save(formulario: Formulario){
    this.formularios.push(formulario)
    console.log(this.formularios)
    this.create(formulario)
  }

  getList(){
    return this.formularios
  }

  
  getAll() {
    return this.formulariosRef.valueChanges();
  }

  create(formulario: Formulario): any {
    return this.formulariosRef.add({ ...formulario});
  }

  update(id: string, data: any): Promise<void> {
    return this.formulariosRef.doc(id).update(data);
  }

  delete(id: string): Promise <void> {
    return this.formulariosRef.doc(id).delete();
  }

}
