import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router,Event, NavigationStart } from '@angular/router';
import { ElectronService } from 'ngx-electron';


import * as Electron from 'electron';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activoInicio='';
  activoStock='';
  activoVentas='';
  activoClientes='';

  constructor(private location:Location,private router:Router,private _electronService:ElectronService) { 
    this.configurarPestanas();
    
  }
  public configurarPestanas(){
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
        switch(event.url){
          case '/':
            this.activoInicio='active'
            this.activoStock=''
            this.activoVentas=''
            this.activoClientes='';
          break;
          case '/Stock':
            this.activoInicio=''
            this.activoStock='active'
            this.activoVentas=''
            this.activoClientes='';
          break;
          case '/Ventas':
            this.activoInicio=''
            this.activoStock=''
            this.activoVentas='active'
            this.activoClientes='';
          break;
          case '/Clientes':
            this.activoInicio=''
            this.activoStock=''
            this.activoVentas=''
            this.activoClientes='active';
          break;
          
        }
      }
    })
  }
  public listenerVentana(button){
    if(this._electronService.isElectronApp){
      this._electronService.ipcRenderer.send('window-button',button)
    }
    return false;
  }

  ngOnInit() {
  }

}
