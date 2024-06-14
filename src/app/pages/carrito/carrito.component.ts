import { Component, OnInit } from '@angular/core';
import { Producto } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: Producto[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe(productos => {
      this.productosEnCarrito = productos;
    });
  }

  eliminarProducto(producto: Producto) {
    this.carritoService.eliminarProducto(producto);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }
}
