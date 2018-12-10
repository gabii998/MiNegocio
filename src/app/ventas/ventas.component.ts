import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
   dataTable

  constructor() { }

  ngOnInit() {
    const table: any = $('#tabla');
    this.dataTable = table.DataTable();
  }

}
