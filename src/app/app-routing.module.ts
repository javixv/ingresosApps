import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : '', component : DashboardComponent, children : [
    {path : 'estadistica', component : EstadisticaComponent},
    {path : 'detalle', component : DetalleComponent},
    {path : 'ingreso-egresos', component : IngresoEgresoComponent},
  ]},
  {path : '**', redirectTo : ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
