import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, Usuario } from '../../services/user.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  usuario: Usuario = { id: 0, username: '', password: '', nombre: '', email: '' };

  constructor(
    private usuarioService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.usuarioService.getUsuario(id).subscribe(data => {
      this.usuario = data;
    });
  }

  onSubmit(): void {
    this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(() => {
      this.router.navigate(['/lista-usuarios']);
    });
  }

}
