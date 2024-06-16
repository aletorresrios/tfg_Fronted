import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';
export interface Usuario {
  id: number;
  username: string;
  password: string;
  nombre: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public añadirUsario(user:any){
    return this.http.post(`${baserUrl}/usuarios/`,user)
  }
  public añadirAdmin(user:any){
    return this.http.post(`${baserUrl}/usuarios/admin`,user)
  }
  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${baserUrl}/usuarios/${id}`);
  }
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baserUrl}/usuarios`);
  }
  actualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${baserUrl}/usuarios/${id}`, usuario);
  }
  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${baserUrl}/usuarios/${id}`);
  }
}
