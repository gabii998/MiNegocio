import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Route } from '@angular/router';
import { NgxElectronModule } from 'ngx-electron';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { StockComponent } from './stock/stock.component';
import { VentasComponent } from './ventas/ventas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { ModalVentaComponent } from './modal-venta/modal-venta.component';

const Rutas:Route[]=[
  {path:"",component:InicioComponent},
  {path:"Stock",component:StockComponent},
  {path:"Ventas",component:VentasComponent},
  {path:"Clientes",component:ClientesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    StockComponent,
    VentasComponent,
    ClientesComponent,
    ModalClienteComponent,
    ModalVentaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Rutas),
    NgxElectronModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
