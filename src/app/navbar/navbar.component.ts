import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router,Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activoInicio='';
  activoStock='';
  activoVentas='';

  constructor(location:Location,router:Router) { 
    router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
        switch(event.url){
          case '/':
            this.activoInicio='active'
            this.activoStock=''
            this.activoVentas=''
          break;
          case '/Stock':
            this.activoInicio=''
            this.activoStock='active'
            this.activoVentas=''
          break;
          case '/Ventas':
            this.activoInicio=''
            this.activoStock=''
            this.activoVentas='active'
          break;
          
        }
      }
    })
  }

  ngOnInit() {
  }

}
