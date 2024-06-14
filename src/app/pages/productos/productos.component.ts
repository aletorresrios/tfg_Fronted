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


}
