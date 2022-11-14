import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginWithGoogleService } from './login-with-google.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  logueado = false

  constructor(private router:Router, private login:LoginService,private google:LoginWithGoogleService){}
  items:MenuItem[] = [];

  ngOnInit(): void {
    this.logueado = this.login.estaLogueado()
    this.google.getUser()
    this.items = [
      {
        label:"Home",
        icon:"pi pi-home",
        routerLink:"/"
      },
      {
        label:"Admin",
        icon: "pi pi-user-plus",
        routerLink:"Admin",
      },
      {
        label:"Contacto",
        icon: "pi pi-user-phone",
        routerLink:"Contacto",
      }
    ]
  }
  title = 'guardian';



  goToLogin(){
    this.router.navigateByUrl("Login")
  }

  iniciarSesionConGoogle(){
    this.google.loginWithGoogle()
    this.ngOnInit()
  }

  cerrarSesionConGoogle(){
    this.google.logOut()
  }


  CerrarSesion(){
    this.login.logOut()
    this.router.navigateByUrl("/")
    this.ngOnInit()
  }
}
