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
import { ConsultaCepService } from '../services/consulta-cep.service';

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
    private isAuth: AuthService,
    private consultaCepService: ConsultaCepService
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
      cep: new FormControl('', [Validators.required]),
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
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

  get cep() {
    return this.form.get('cep')!;
  }

  get rua() {
    return this.form.get('rua')!;
  }

  get bairro() {
    return this.form.get('bairro')!;
  }

  get cidade() {
    return this.form.get('cidade')!;
  }

  get endereco() {
    return this.form.get('endereco')!;
  }

  showToastSuccess() {
    return this.toastr.success('This is the success toastr');
  }

  showToastError(error: any) {
    console.log(error);
    return this.toastr.error(error);
  }

  buscaCep(value: any) {
    const data = '';

    if (this.cep.value != null || this.cep.value != '') {
      this.consultaCepService
        .consultaCep(this.cep.value)
        .subscribe((res: any) =>
          this.form.patchValue({
            cep: res.cep,
            rua: res.rua,
            endereco: res.endereco,
            bairro: res.bairro,
            cidade: res.cidade,
          })
        );
    }
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
