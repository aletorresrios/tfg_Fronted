import { Injectable } from '@angular/core';
import { Producto } from './producto.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baserUrl from './helper';

export interface Pedido {
  id?: number;
  usuarioID: number;
}
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  crearPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${baserUrl}/pedidos`, pedido);
  }
}
