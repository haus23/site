import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalDialogDirective } from './directives/modal-dialog.directive';

@NgModule({
  declarations: [
    ModalDialogDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,

    ModalDialogDirective
  ]
})
export class SharedModule { }
