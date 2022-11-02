import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coleta',
  templateUrl: './coleta.component.html',
  styleUrls: ['./coleta.component.css'],
})
export class ColetaComponent implements OnInit {
  public form!: FormGroup;

  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      ativo: new FormControl('', [Validators.required]),
      criadouro: new FormControl('', [Validators.required]),
      larvas: new FormControl('', [Validators.required]),
      aviso: new FormControl('', [Validators.required]),
      responsavel: new FormControl('', [Validators.required]),
      funcao: new FormControl('', [Validators.required]),
      observacao: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.form.get('name')!;
  }

  get criadouro() {
    return this.form.get('criadouro')!;
  }

  get responsavel() {
    return this.form.get('responsavel')!;
  }

  get funcao() {
    return this.form.get('funcao')!;
  }

  get observacao() {
    return this.form.get('observacao')!;
  }

  get aviso() {
    return this.form.get('aviso');
  }

  get larvas() {
    return this.form.get('larvas')!;
  }

  get ativo() {
    return this.form.get('ativo')!;
  }

  showToastSuccess(message: string) {
    return this.toastr.success(message);
  }

  showToastError(error: any) {
    return this.toastr.error(error);
  }

  async onSubmit() {
    try {
      this.router.navigate(['/coleta-endereco'], {
        queryParams: { data: JSON.stringify(this.form.value) },
      });
    } catch (error) {
      console.log(error);
      this.showToastError(error);
    }
  }
}
