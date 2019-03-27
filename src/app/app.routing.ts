import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
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
    path: 'admin'
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]

module.exports = appRoutes;