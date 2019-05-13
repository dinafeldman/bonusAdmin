import { ClientsService } from './clients.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientLineComponent } from './client-line/client-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
