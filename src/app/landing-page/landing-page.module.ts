import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingFreeEbookComponent } from './components/landing-free-ebook/landing-free-ebook.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ThankYouEbookComponent } from './components/thank-you-ebook/thank-you-ebook.component';
import { DownloadFreeEbookComponent } from './components/download-free-ebook/download-free-ebook.component';


@NgModule({
  declarations: [LandingPageComponent, LandingFreeEbookComponent, ThankYouEbookComponent, DownloadFreeEbookComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class LandingPageModule { }
