import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGaurd } from './guard/loginGuard/loginguard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule)
  },
  {
    path: 'auth',
    canActivate: [LoginGaurd],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
