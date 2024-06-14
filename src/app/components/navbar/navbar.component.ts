import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

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
  constructor(public login:LoginService){}

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
    window.location.reload();
  }
  toggleCarrito() {
    this.carritoAbierto = !this.carritoAbierto;
  }
  cerrarCarrito() {
    this.carritoAbierto = false;
  }


}
