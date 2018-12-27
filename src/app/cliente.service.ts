import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient:HttpClient) { }

  traerClientes(){
    return this.httpClient.get<Cliente>("http://localhost:3000/Clientes");
  }
  agregarCliente(){

  }
  eliminarCliente(){
    
  }
}
