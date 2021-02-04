import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookiesComponent } from './components/cookies/cookies.component';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'cookies', component: CookiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
