import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingFreeEbookComponent } from './components/landing-free-ebook/landing-free-ebook.component';

import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent },
{ path: 'free-ebook', component: LandingFreeEbookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
