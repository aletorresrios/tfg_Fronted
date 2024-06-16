import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrl: './crear-admin.component.css'
})
export class CrearAdminComponent implements OnInit{
  public user={
    username: '',
    password: '',
    nombre: '',
    email: '',
  }

  constructor(private userService:UserService, private snack:MatSnackBar,private router: Router){ }

  ngOnInit(): void{

  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es obligatorio', 'Aceptar',{
        duration:3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      return;
    }
    // Validar longitud mínima de la contraseña
    if (!this.user.password || this.user.password.length < 4) {
      this.snack.open('La contraseña debe tener al menos 4 caracteres', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      return;
    }
    
    // Validar formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.user.email || !emailPattern.test(this.user.email)) {
      this.snack.open('Ingrese un correo electrónico válido', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      return;
    }
    this.userService.añadirAdmin(this.user).subscribe(
      (data) =>{
        console.log(data);
        Swal.fire('Administrador creado', 'Administrador registrado con exito', 'success')
        this.router.navigate(['admin']);
      },(error) =>{
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema', 'Aceptar',{
          duration:3000,
        });
      }
    )
    
  }


}
