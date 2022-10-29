import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Agente } from '../shared/models/Agente.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-coleta',
  templateUrl: './coleta.component.html',
  styleUrls: ['./coleta.component.css'],
})
export class ColetaComponent implements OnInit {
  public form!: FormGroup;
  public URL = 'cadastrar/agente';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService,
    private isAuth: AuthService
  ) {}

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

  showToastSuccess() {
    return this.toastr.success('This is the success toastr');
  }

  showToastError(error: any) {
    console.log(error);
    return this.toastr.error(error);
  }

  async onSubmit() {
    try {
      await this.apiService.register(this.URL, this.form.value).subscribe();
    } catch (error) {
      console.log(error);
      this.showToastError(error);
    }
  }
}
