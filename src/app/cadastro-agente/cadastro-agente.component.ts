import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cadastro-agente',
  templateUrl: './cadastro-agente.component.html',
  styleUrls: ['./cadastro-agente.component.css'],
})
export class CadastroAgenteComponent implements OnInit {
  public form!: FormGroup;
  public URL = 'cadastrar/agente';

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(''),
      ativo: new FormControl(''),
      criadouro: new FormControl(''),
      larvas: new FormControl(''),
      aviso: new FormControl(''),
      responsavel: new FormControl(''),
      funcao: new FormControl(''),
      observacao: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form.value);

    return false;
    this.apiService.register(this.URL, this.form.value);
  }
}
