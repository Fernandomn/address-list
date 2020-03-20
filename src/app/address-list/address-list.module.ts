import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressGridComponent} from './address-grid/address-grid.component';
import {AddressModalComponent} from './adress-modal/address-modal.component';
import {AddressScreenComponent} from './address-screen/address-screen.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {NgxViacepModule} from '@brunoc/ngx-viacep';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {TextMaskModule} from 'angular2-text-mask';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RemoveAddressModalComponent} from './remove-address-modal/remove-address-modal.component';
import {MatSortModule} from "@angular/material/sort";


const matImports = [
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSortModule,
];

@NgModule({
  declarations: [
    AddressScreenComponent,
    AddressGridComponent,
    AddressModalComponent,
    RemoveAddressModalComponent,
  ],
  imports: [
    CommonModule,
    NgxViacepModule,
    ...matImports,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule,
    NgxMaskModule.forRoot(),
  ]
})

// export const options: Partial<IConfig> | (() => Partial<IConfig>);

export class AddressListModule {
}
