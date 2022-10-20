import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatovaGuard } from './patova.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Contacto",component:ContactoComponent},
  {path:"Admin", component:AdminComponent,canActivate:[PatovaGuard]},
  {path:"Login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
