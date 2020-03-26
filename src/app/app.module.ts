import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalze.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { VowelCountPipe } from './pipes/vowelCount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    ReversePipe,
    VowelCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
