import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router) {
  }

  public loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit({email, password}) {
    console.log('Submit!');
    if (this.loginVerification(email, password)) {
      this.goToAddressList();
    }
  }

  private loginVerification(email: string, password: string) {
    return true;
  }

  private goToAddressList() {
    this.router.navigate(['address-screen']);
  }
}
