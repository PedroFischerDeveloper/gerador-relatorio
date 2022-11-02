import { NetworkService } from './../services/network.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastService } from '../services/toast.service';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { CadastrarColetaService } from '../services/cadastrar-coleta.service';
import { ConsultaCepService } from '../services/consulta-cep.service';
import { LocalStorageServiceService } from '../services/local-storage-service.service';

@Component({
  selector: 'app-coleta-endereco',
  templateUrl: './coleta-endereco.component.html',
  styleUrls: ['./coleta-endereco.component.css'],
})
export class ColetaEnderecoComponent implements OnInit {
  public form!: FormGroup;

  public coleta: any;
  public add = 0;
  public id = 0;
  public fila = [{}];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastService,
    private isAuth: AuthService,
    private consultaCepService: ConsultaCepService,
    private cadastrarColetaService: CadastrarColetaService,
    private route: ActivatedRoute,
    private network: NetworkService,
    private localStorage: LocalStorageServiceService
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

  onSubmit() {
    const data = {
      sent: false,
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

    console.log(data);
    if (data != null) {
      const index = this.fila.findIndex(
        (item: any) =>
          item.name === data.name &&
          item.ativo === data.ativo &&
          item.responsavel === data.responsavel &&
          item.criadouro === data.criadouro &&
          item.larvas === data.larvas &&
          item.aviso === data.aviso &&
          item.responsavel === data.responsavel &&
          item.funcao === data.funcao &&
          item.observacao === data.observacao &&
          item.cep === data.cep &&
          item.rua === data.rua &&
          item.numero === data.numero &&
          item.complemento === data.complemento &&
          item.bairro === data.bairro &&
          item.cidade === data.cidade
      );

      if (index === 1) {
        this.toastr.showMessageError('Item já existe na fila : (', 'Ops!!');
      } else {
        this.fila.push(data);
        this.toastr.showMessageSuccess('Item  salvo na fila : )', 'Eba!!');
      }
    }
  }

  sendToLocalStorage() {
    this.localStorage.set(`coleta-${this.add}`, this.fila);
    this.add++;
  }

  isEquals(object1: any, object2: any) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
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
