import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientJsonpModule,
    HttpClientModule
  ]
})
export class CoreModule { }
