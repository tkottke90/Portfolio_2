import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AboutRoutingModule } from './about-routing.module';
import { HeaderModule } from '../header/header.module';
import { TreeImageComponent } from './tree-image/tree-image.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    BaseComponent,
    TreeImageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutRoutingModule,
    HeaderModule,
    MatButtonModule
  ]
})
export class AboutModule { }
