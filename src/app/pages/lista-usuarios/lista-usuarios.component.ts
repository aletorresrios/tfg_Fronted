import { Component } from '@angular/core';
import { UserService, Usuario } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  usuarios: Usuario[] = [];

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  eliminarUsuario(id: number): void {
    this.userService.eliminarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    });
  }
  editarUsuario(id: number): void {
    this.router.navigate(['/usuarios/editar', id]);
  }
}
