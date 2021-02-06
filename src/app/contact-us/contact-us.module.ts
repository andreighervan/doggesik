import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TextFieldModule } from '@angular/cdk/text-field';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { LeftSectionContactUsComponent } from './components/left-section-contact-us/left-section-contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactUsComponent, LeftSectionContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TextFieldModule
  ]
})
export class ContactUsModule { }
