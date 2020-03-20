import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './postsList/postsList.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
  ],
  imports: [
    BrowserModule,
    // HttpClient,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
