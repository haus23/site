import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ClarityModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ClarityModule
  ]
})
export class SharedModule { }
