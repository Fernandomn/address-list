import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginScreenComponent} from './login/login-screen/login-screen.component';
import {LoginCardComponent} from './login/login-card/login-card.component';
import {AdressScreenComponent} from './address-list/adress-screen/adress-screen.component';
import {AdressGridComponent} from './address-list/adress-grid/adress-grid.component';
import {AdressModalComponent} from './address-list/adress-modal/adress-modal.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {NgxViacepModule} from '@brunoc/ngx-viacep';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginCardComponent,
    AdressScreenComponent,
    AdressGridComponent,
    AdressModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxViacepModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
