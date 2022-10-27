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

@Component({
  selector: 'app-cadastro-agente',
  templateUrl: './cadastro-agente.component.html',
  styleUrls: ['./cadastro-agente.component.css'],
})
export class CadastroAgenteComponent implements OnInit {
  public form!: FormGroup;
  public URL = 'cadastrar/agente';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      ativo: new FormControl(false),
      criadouro: new FormControl('', [Validators.required]),
      larvas: new FormControl(false),
      aviso: new FormControl(false),
      responsavel: new FormControl('', [Validators.required]),
      funcao: new FormControl('', [Validators.required]),
      observacao: new FormControl('', [Validators.required]),
    });
  }

  get nome() {
    return this.form.get('nome')!;
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
