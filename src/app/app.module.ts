import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ContactoComponent } from './contacto/contacto.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {ButtonModule} from 'primeng/button';


import {MenubarModule} from 'primeng/menubar';
import { LoginComponent } from './login/login.component';
import { PatovaGuard } from './patova.guard';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    InputTextModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    AngularFireAuthModule
  ],
  providers: [LoginService,PatovaGuard,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
