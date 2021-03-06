import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyDataComponent } from './my-data/my-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'minha-conta', component: MyAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'minha-conta/meus-dados', component: MyDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'minha-conta/favoritos', component: FavoritosComponent,
    canActivate: [AuthGuard]
  },
  { path: 'header', component: HeaderComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
