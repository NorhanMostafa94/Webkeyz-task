import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceComponent } from './features/service/service.component';
import { ServiceListComponent } from './features/service/service-list/service-list.component';
import { ServiceItemComponent } from './features/service/service-item/service-item.component';
import { ServiceOfService } from './features/service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ServiceListComponent,
    ServiceItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceOfService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
