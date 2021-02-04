import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HomeAboutUsSectionComponent } from './components/home-about-us-section/home-about-us-section.component';
import { CookiesComponent } from './components/cookies/cookies.component';


@NgModule({
  declarations: [HomeComponent, LatestPostsComponent, SliderComponent, NewsletterComponent, HomeAboutUsSectionComponent, CookiesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
