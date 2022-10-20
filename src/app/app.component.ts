import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router:Router){}
  items:MenuItem[] = [];

  ngOnInit(): void {
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
}
