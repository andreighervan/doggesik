import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadFreeEbookComponent } from './components/download-free-ebook/download-free-ebook.component';
import { LandingFreeEbookComponent } from './components/landing-free-ebook/landing-free-ebook.component';
import { ThankYouEbookComponent } from './components/thank-you-ebook/thank-you-ebook.component';

import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent },
{ path: 'free-ebook', component: LandingFreeEbookComponent },
{ path: 'thank-you-ebook', component: ThankYouEbookComponent },
{ path: 'download-ebook', component: DownloadFreeEbookComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
