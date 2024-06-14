import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosComponent } from '../pages/productos/productos.component';
import baserUrl from './helper';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagenUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${baserUrl}/productos`);
  }
  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${baserUrl}/productos`, producto);
  }
}
