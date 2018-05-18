import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
import { UnoCreateComponent } from './uno-create/uno-create.component';
import { UnoEditComponent } from './uno-edit/uno-edit.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UnoDetailComponent } from './uno-detail/uno-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    UnoCreateComponent,
    UnoEditComponent,
    UnoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
