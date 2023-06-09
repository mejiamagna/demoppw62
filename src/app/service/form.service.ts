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
    formulario.uid = this.db.createId();
    this.create(formulario)
  }

  getList(){
    return this.formularios
  }

  
  getAll() {
    return this.formulariosRef.valueChanges();
  }

  create(formulario: Formulario): any {
    return this.formulariosRef.doc(formulario.uid).set({ ...formulario});
  }

  update(id: string, data: any): Promise<void> {
    return this.formulariosRef.doc(id).update(data);
  }

  delete(id: string): Promise <void> {
    this.getList().forEach(Element => {
      if(Element.uid!=id || id == '' ){
        console.log("Sin valor")
      }
    })
    return this.formulariosRef.doc(id).delete();
  }

}
