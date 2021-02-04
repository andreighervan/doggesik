import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';
import { SectionMainAboutUsComponent } from './components/section-main-about-us/section-main-about-us.component';


@NgModule({
  declarations: [AboutUsComponent, SectionMainAboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
