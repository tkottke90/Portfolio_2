import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { BaseComponent } from './base/base.component';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
