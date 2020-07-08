import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StomaAddComponent } from './stoma-add/stoma-add.component';
import { StomaGetComponent } from './stoma-get/stoma-get.component';
import { StomaEditComponent } from './stoma-edit/stoma-edit.component';
import { PaciAddComponent } from './paci-add/paci-add.component';
import { PaciGetComponent } from './paci-get/paci-get.component';
import { PaciEditComponent } from './paci-edit/paci-edit.component';
import { PacientService } from './pacient.service';
import { MedicService } from './medic.service';

@NgModule({
  declarations: [
    AppComponent,
    StomaAddComponent,
    StomaGetComponent,
    StomaEditComponent,
    PaciAddComponent,
    PaciGetComponent,
    PaciEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PacientService,
              MedicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
