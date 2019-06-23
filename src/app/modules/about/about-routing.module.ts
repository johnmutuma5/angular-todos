import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';

const routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  // exports: [RouterModule] the app.module exports this
})
export class AboutRoutingModule { }
