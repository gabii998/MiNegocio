import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  dataTable
  constructor() { }

  ngOnInit() {
    const table: any = $('#tabla');
    this.dataTable = table.DataTable();
  }

}
