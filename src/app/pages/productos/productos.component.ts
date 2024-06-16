import { Component, OnInit } from '@angular/core';
import { Producto, ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{

  productos: any[] = [];
  paginaActual: number = 1; // Página actual, comienza en la página 1
  productosPorPagina: number = 10; // Cantidad de productos por página

  constructor(private productoService: ProductoService, private carritoService: CarritoService){}
  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos(): void {
    this.productoService.getProductos()
      .subscribe((data: any) => {
        this.productos = data; // Almacenamos los productos obtenidos del backend en la propiedad productos
      });
  }
  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarProducto(producto);
  }
  cambiarPagina(numeroPagina: number) {
    this.paginaActual = numeroPagina;
  }

}
