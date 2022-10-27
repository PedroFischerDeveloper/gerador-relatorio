import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      cpf: new FormControl(''),
      senha: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form.value);

    return false;
    this.apiService.register(this.URL, this.form.value);
  }
}
