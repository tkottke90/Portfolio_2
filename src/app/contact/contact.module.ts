import { MatButtonModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { BaseComponent } from './base/base.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [BaseComponent, CustomInputComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class ContactModule { }
