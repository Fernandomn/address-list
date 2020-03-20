import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'address-list';

  constructor(private fb: FormBuilder) {
  }

  public loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required]
  });
}
