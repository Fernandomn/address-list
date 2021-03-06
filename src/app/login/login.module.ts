import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginCardComponent} from "./login-card/login-card.component";
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const matImports = [
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatButtonModule,
  MatSnackBarModule,
]

@NgModule({
  declarations: [
    LoginCardComponent,
    LoginScreenComponent
  ],
  exports: [
    LoginScreenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...matImports,
  ]
})
export class LoginModule {
}
