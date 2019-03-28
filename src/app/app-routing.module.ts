import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { 
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'work',
    loadChildren: './work/work.module#WorkModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'admin',
    redirectTo: '/' // TODO: Add Admin Module
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: NotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
