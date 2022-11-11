import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginWithGoogleService {

  constructor(private auth:AngularFireAuth, private cookie: CookieService) { }

  async loginWithGoogle(){
    let referenceProvider = new firebase.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(referenceProvider);
    this.auth.authState.subscribe(
      async user=>{
        await user?.getIdToken()
        .then(
          token=>{
            this.cookie.set("idToken",token)
          }
        )
        .catch(
          error=>{
            console.error("Ocurrió un error: ",error)
          }
        )
      }
    )
  }

  getUser(){
    this.auth.authState.subscribe(
      async user=>{
        let token = await user?.getIdToken()
        console.log(token)
      }
    )
  }

  logOut(){
    this.auth.signOut().then(
      ()=>{
        this.cookie.delete("idToken");
      }
    )
  }
  
}
