import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class ContactModule { }
