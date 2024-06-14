import { Component, OnInit} from '@angular/core';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  public user={
    username: '',
    password: '',
    nombre: '',
    email: '',
  }

  constructor(private userService:UserService, private snack:MatSnackBar, router: Router){ }

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
    this.userService.añadirUsario(this.user).subscribe(
      (data) =>{
        console.log(data);
        Swal.fire('Usuario guardado', 'Usuario registrado con exito', 'success')
      },(error) =>{
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema', 'Aceptar',{
          duration:3000,
        });
      }
    )
  }

}
