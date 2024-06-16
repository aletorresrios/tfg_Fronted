import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoggedIn = false;
  constructor(public login:LoginService){}
  ngOnInit(): void{
    this.isLoggedIn = this.login.isLoggedIn();
  }
}
