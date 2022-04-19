import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { PrimeNGConfig } from 'primeng/api';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import { PushinputComponent } from './comp/pushinput/pushinput.component';

@NgModule({
  declarations: [
    AppComponent,
    PushinputComponent
  ],
  imports: [
    ButtonModule,
    CardModule,
    BrowserModule,
    RippleModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
}
