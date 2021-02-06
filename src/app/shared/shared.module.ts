import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { NewsletterWidgetComponent } from './components/newsletter-widget/newsletter-widget.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { Safe } from './pipes/safe.html.pipe';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, BlogItemComponent, NewsletterWidgetComponent, Safe],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, BlogItemComponent, NewsletterWidgetComponent, Safe]
})
export class SharedModule { }
