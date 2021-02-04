import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

<<<<<<< HEAD
=======

>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
<<<<<<< HEAD
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  initialNavigation: 'enabled'
=======
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD

=======
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
