import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service'

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes = {};
  dataTable;

  constructor(private service: ClienteService) {
    this.service.traerClientes().subscribe((datos) => {
      this.clientes = datos;
      const table: any = $('#tabla');
      this.dataTable = table.DataTable({
        data:this.clientes,
        "columns":[
          {"data": "nombre"},
          {"data": "deuda"}
        ]
      });
    })
  }

  ngOnInit() {
  }

}
