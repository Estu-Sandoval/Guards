import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuarios } from './usuarios';
import { map } from 'rxjs'
import { FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoged = false

  private coleccionUsuarios: AngularFirestoreCollection<Usuarios>

  constructor(private db:AngularFirestore) {
    this.coleccionUsuarios = this.db.collection("usuarios");
  }

  getUsuarios(){
    return this.coleccionUsuarios.snapshotChanges().pipe(
        map(action=>action.map(a=>a.payload.doc.data()))
      )
  }

  login(form:FormGroup,usuariosCol:Usuarios[]){
    let texto = "No Inició"
    if(form.valid){
      usuariosCol.forEach(
        usuario=>{
          if(form.value.username === usuario.username){
            if(form.value.password === usuario.password){
              this.isLoged = true
              texto = "Inició Sesión"
            }
          }
        }
      )
      alert(texto)
    }
  }

  estaLogueado(){
    return this.isLoged
  }
}
