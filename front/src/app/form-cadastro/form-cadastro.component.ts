import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css'],
})
export class FormCadastroComponent implements OnInit {
  public form!: FormGroup;
  public URL = 'auth';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      adm: new FormControl('', [Validators.required]),
    });
  }

  get nome() {
    return this.form.get('nome')!;
  }

  get cpf() {
    return this.form.get('cpf')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get telefone() {
    return this.form.get('telefone')!;
  }

  get senha() {
    return this.form.get('senha')!;
  }

  get adm() {
    return this.form.get('adm')!;
  }

  onSubmit() {
    console.log(this.form.value);

    return false;
    this.apiService.register(this.URL, this.form.value);
  }
}
