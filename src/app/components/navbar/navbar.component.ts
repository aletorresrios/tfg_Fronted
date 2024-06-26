import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = false;
  user:any = null;
  carritoAbierto = false;
  isAdmin: boolean = false;
  constructor(public login:LoginService, private router:Router){}

  ngOnInit(): void{
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
        this.isAdmin = this.login.isAdmin();
      }
    )
    this.isAdmin = this.login.isAdmin();


  }
  public logout(){
    this.login.logout();
    //window.location.reload();
    Swal.fire('Has cerrado sesion', 'Sesion cerrada correctamente', 'success')
        this.router.navigate(['']);
        window.location.reload();
  }
  toggleCarrito() {
    this.carritoAbierto = !this.carritoAbierto;
  }
  cerrarCarrito() {
    this.carritoAbierto = false;
  }


}
