import { AuthService } from 'src/app/services/auth.service';

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public URL = 'auth';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      cpf: new FormControl('', [Validators.required]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get cpf() {
    return this.form.get('cpf')!;
  }

  get senha() {
    return this.form.get('senha')!;
  }

  onLogin() {
    this.auth.auth(this.form.value.cpf, this.form.value.senha);

    // this.apiService.auth(this.URL, this.form.value);
  }
}
