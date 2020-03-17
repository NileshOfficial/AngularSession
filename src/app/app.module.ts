import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayWithDivComponent } from './playWithDiv/playWithDiv.component';
import { ListComponent } from './list/list.component';
import { InputFieldComponent } from './inputField/inputField.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayWithDivComponent,
    ListComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
