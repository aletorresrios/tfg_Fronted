import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../services/producto.service';
import { Pedido, PedidoService } from '../../services/pedido.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrl: './finalizar-compra.component.css'
})
export class FinalizarCompraComponent {
  usuarioID: any;
  productosEnCarrito: Producto[] = [];
  

  constructor(private carritoService: CarritoService, private pedidoService: PedidoService, private router: Router, public login:LoginService) {}

  ngOnInit(): void {
    this.usuarioID= this.login.getUserId();
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    
  }

  finalizarCompra() {
    const nuevoPedido: Pedido = {
      usuarioID: this.usuarioID
    };

    this.pedidoService.crearPedido(nuevoPedido).subscribe(
      (pedido) => {
        Swal.fire('Compra exitosa', 'Ha realizado con exito su compra', 'success')
        this.carritoService.vaciarCarrito();
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error al finalizar la compra:', error);
        alert('Ocurrió un error al finalizar la compra. Por favor, intenta de nuevo.');
      }
    );
  }
  get totalCarrito(): number {
    return this.productosEnCarrito.reduce((total, producto) => total + producto.precio, 0);
  }
  


}
