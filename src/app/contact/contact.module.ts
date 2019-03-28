import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { BaseComponent } from './base/base.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HeaderModule
  ]
})
export class ContactModule { }
