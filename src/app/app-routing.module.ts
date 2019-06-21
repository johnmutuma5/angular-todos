import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosRoutingModule } from './modules/todos/todos-routing.module';
import { AboutRoutingModule } from './modules/about/about-routing.module';

// const routes: Routes = [
//   // {
//   //   path: 'about',
//   //   component: AboutComponent,
//   // }
// ];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    TodosRoutingModule,
    AboutRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
