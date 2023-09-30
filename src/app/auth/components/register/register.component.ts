import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/appstate/app.state';
import { signUpStart } from '../../state/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private store: Store<AppSate>
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onRegisterSubmit() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    this.store.dispatch(signUpStart({ email, password }))
  }
}
