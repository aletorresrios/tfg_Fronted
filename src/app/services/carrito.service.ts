import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './producto.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosEnCarrito: Producto[] = [];
  private carritoSubject = new BehaviorSubject<Producto[]>([]);

  carrito$ = this.carritoSubject.asObservable();

  agregarProducto(producto: Producto) {
    this.productosEnCarrito.push(producto);
    this.carritoSubject.next(this.productosEnCarrito);
  }

  obtenerProductos() {
    return this.productosEnCarrito;
  }

  eliminarProducto(producto: Producto) {
    const index = this.productosEnCarrito.indexOf(producto);
    if (index > -1) {
      this.productosEnCarrito.splice(index, 1);
      this.carritoSubject.next(this.productosEnCarrito);
    }
  }

  vaciarCarrito() {
    this.productosEnCarrito = [];
    this.carritoSubject.next(this.productosEnCarrito);
  }
}
