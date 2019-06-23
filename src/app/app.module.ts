import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TodosModule } from './modules/todos/todos.module';
import { AboutModule } from './modules/about/about.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule, // re-exports the  CommonModule which the declarations here will have access to
    HttpClientModule,
    AppRoutingModule, // re-exports the RouterModule so LayoutComponent is able to make use to router-outlet
    // sub modules
    TodosModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
