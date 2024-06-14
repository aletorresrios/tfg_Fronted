import { Component } from '@angular/core';
import { Producto, ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  producto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    descripcion: '',
    imagenUrl: ''
  };
  constructor(private productoService: ProductoService) { }
  

  onSubmit() {
    this.productoService.crearProducto(this.producto).subscribe(data => {
      console.log('Producto creado:', data);
    }, error => {
      console.error('Error al crear el producto:', error);
      // Puedes añadir lógica para manejar el error
    });
  }

}
