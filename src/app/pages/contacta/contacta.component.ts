import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrl: './contacta.component.css'
})
export class ContactaComponent {
  constructor(private router:Router){}
  
  enviarFormulario() {
    Swal.fire({
      title: 'Enviado correctamente',
      text: 'Su mensaje ha sido enviado exitosamente. Le contestaremos lo antes posible.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
        this.router.navigate(['']);
  }
}
