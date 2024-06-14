import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjec = new Subject<boolean>();

  constructor(private http:HttpClient, private router:Router) { }

  //Generamos un token
  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/generate-token`, loginData);
  }
  //Iniciamos sesion
  public loginUser(token:any){
    localStorage.setItem('token', token);
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == ''||tokenStr==null){
      return false;
    }else{
      return true;
    }
  }
  //Cerramos sesiony eliminamos el token
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    return true;
  }
  //Obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }
  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }
  public getUser (){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
  public getCurrentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`);
  }
  public getUserId(): number | null {
    const userStr = localStorage.getItem('user');
    if (userStr !== null) {
      const user = JSON.parse(userStr);
      return user.id;
    } else {
      this.logout();
      return null;
    }
  }
  public isAdmin(): boolean {
    const user = this.getUser();
    if (user && user.authorities) {
      return user.authorities.some((auth: any) => auth.authority === 'ADMIN');
    }
    return false;
  }
}
