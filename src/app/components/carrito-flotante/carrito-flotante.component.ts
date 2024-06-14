import { Component } from '@angular/core';
import { Producto } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito-flotante',
  templateUrl: './carrito-flotante.component.html',
  styleUrl: './carrito-flotante.component.css'
})
export class CarritoFlotanteComponent {
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
  get totalCarrito(): number {
    return this.productosEnCarrito.reduce((total, producto) => total + producto.precio, 0);
  }
  
}
