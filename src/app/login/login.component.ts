import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  colUsuarios:Usuarios[] = []

  datosUsuarios = new FormGroup(
    {
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
  )

  constructor(private servicioUsuarios:LoginService) { }

  ngOnInit(): void {
    this.servicioUsuarios.getUsuarios().subscribe(
      usuarios => this.colUsuarios = usuarios
    )
  }

  iniciaSesion(){
    this.servicioUsuarios.login(this.datosUsuarios,this.colUsuarios)
  }

}