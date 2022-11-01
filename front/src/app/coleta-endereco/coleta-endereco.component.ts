import { NetworkService } from './../services/network.service';
import { Network } from '@capacitor/network';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { CadastrarColetaService } from '../services/cadastrar-coleta.service';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-coleta-endereco',
  templateUrl: './coleta-endereco.component.html',
  styleUrls: ['./coleta-endereco.component.css'],
})
export class ColetaEnderecoComponent implements OnInit {
  public form!: FormGroup;
  public coleta: any;
  public fila = [{}];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService,
    private isAuth: AuthService,
    private consultaCepService: ConsultaCepService,
    private cadastrarColetaService: CadastrarColetaService,
    private route: ActivatedRoute,
    private network: NetworkService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      cep: new FormControl('', [Validators.required]),
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
    });

    console.log(this.network);

    this.route.queryParams.subscribe((res) => {
      this.coleta = JSON.parse(res['data']);
    });
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

  showToastSuccess(message: string) {
    return this.toastr.success(message);
  }

  showToastError(error: any) {
    return this.toastr.error(error);
  }

  onSubmit() {
    const data = {
      name: this.coleta.name,
      ativo: this.coleta.ativo,
      criadouro: this.coleta.criadouro,
      larvas: this.coleta.larvas,
      aviso: this.coleta.aviso,
      responsavel: this.coleta.responsavel,
      funcao: this.coleta.funcao,
      observacao: this.coleta.observacao,
      cep: this.form.value.cep,
      rua: this.form.value.rua,
      numero: this.form.value.numero,
      complemento: this.form.value.complemento,
      bairro: this.form.value.bairro,
      cidade: this.form.value.cidade,
    };

    this.fila.push(data);
  }

  saveLocalStorage() {
    this.cadastrarColetaService.prepararUpload(this.fila);
    this.fila = [{}];
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
}
