import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Route } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { StockComponent } from './stock/stock.component';
import { VentasComponent } from './ventas/ventas.component';

const Rutas:Route[]=[
  {path:"",component:InicioComponent},
  //{path:"Inicio",component:InicioComponent},
  {path:"Stock",component:StockComponent},
  {path:"Ventas",component:VentasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    StockComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterModule.forRoot(Rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
