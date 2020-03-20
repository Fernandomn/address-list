import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../storage.service';
import {User} from '../../interfaces/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  addressLogin = 'address-login';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private snackBar: MatSnackBar
  ) {
    if (!this.storageService.get(this.addressLogin)) {
      const loginObj: User = {
        name: 'admin',
        password: 'admin',
        email: 'admin@address-list.com',
        username: 'admin',
      };
      const loginRegisters = [loginObj];
      this.storageService.set(this.addressLogin, JSON.stringify(loginRegisters));

    }
  }

  public loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  public registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });
  selected = new FormControl(0);

  ngOnInit(): void {
  }

  onSubmit({username, password}) {
    console.log('Submit!');
    const user = this.loginVerification(username, password)
    if (!!user) {
      this.snackBar.open('Login efetuado com sucesso!', '',
        {duration: 1000});
      this.goToAddressList(user);
      return;
    }
    this.snackBar.open('Login e/ou senha não registrados. Favor conferir.',
      '', {duration: 1000});

  }

  private loginVerification(username: string, password: string) {
    const loginRegisters = JSON.parse(this.storageService.get(this.addressLogin));
    const result: User = loginRegisters.find(element =>
      element.username === username && element.password === password
    );
    return result;
  }

  private goToAddressList(user?: User) {
    this.router.navigate(['address-screen'],
      user ? {state: {data: user}} : undefined);
  }

  onCreateRegister({name, email, username, password}) {
    if (!!this.loginVerification(username, password)) {
      const warningMsg = 'O usuário já existe';
      console.log(warningMsg);
      this.snackBar.open(warningMsg, '', {duration: 2000});
      this.registerForm.setValue({name: '', email: '', username: '', password: ''});
      this.selected.setValue(0);
      return;
    }
    const loginRegisters = JSON.parse(this.storageService.get(this.addressLogin));
    const newRegister: User = {name, email, username, password};
    loginRegisters.push(newRegister);
    this.storageService.set(this.addressLogin, JSON.stringify(loginRegisters));
    this.snackBar.open('Usuário cadastrado. Favor se dirigir ao login', '',
      {duration: 2000});
    this.selected.setValue(0);
  }

  // onTabChange($event: number) {
  //   console.log($event)
  //   alert(`tab changed: ${$event}`)
  // }
}
