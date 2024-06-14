import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { normalGuard } from './services/normal.guard';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { FinalizarCompraComponent } from './pages/finalizar-compra/finalizar-compra.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'signup', component: SignupComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'admin', component: DashboardComponent, pathMatch: 'full'},
  {path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full', canActivate:[normalGuard]},
  {path: 'productos', component: ProductosComponent, pathMatch: 'full'},
  {path: 'carrito', component: CarritoComponent, pathMatch: 'full'},
  {path: 'finalizar-compra', component: FinalizarCompraComponent, pathMatch: 'full'},
  {path: 'crear-producto', component: CrearProductoComponent, pathMatch: 'full'},
  {path: 'lista-usuarios', component: ListaUsuariosComponent, pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
