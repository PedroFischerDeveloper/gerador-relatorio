import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public URL = 'auth';

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

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

  onSubmit() {
    console.log(this.form.value);

    return false;
    this.apiService.auth(this.URL, this.form.value);
  }
}
