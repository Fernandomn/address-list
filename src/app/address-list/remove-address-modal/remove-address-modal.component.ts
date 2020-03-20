import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Address} from "../../interfaces/address";

@Component({
  selector: 'app-remove-address-modal',
  templateUrl: './remove-address-modal.component.html',
  styleUrls: ['./remove-address-modal.component.scss']
})
export class RemoveAddressModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveAddressModalComponent>,
              @Inject(MAT_DIALOG_DATA) public address: Address) { }

  ngOnInit(): void {
  }

}
