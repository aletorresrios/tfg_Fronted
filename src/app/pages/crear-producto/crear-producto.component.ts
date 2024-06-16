import { Component } from '@angular/core';
import { Producto, ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  constructor(private productoService: ProductoService, private router:Router) { }
  

  onSubmit() {
    this.productoService.crearProducto(this.producto).subscribe(data => {
      console.log('Producto creado:', data);
      Swal.fire('Producto creado', 'Producto creado con exito', 'success')
      this.router.navigate(['admin']);
    }, error => {
      console.error('Error al crear el producto:', error);
      // Puedes añadir lógica para manejar el error
    });
  }

}
