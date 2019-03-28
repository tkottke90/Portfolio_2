import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { WorkRoutingModule } from './work-routing.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
    HeaderModule
  ]
})
export class WorkModule { }
