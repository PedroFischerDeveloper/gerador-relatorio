import { Usuario } from './Usuario';
import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { CadastroService } from './cadastro-service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toast: ToastService,
    private cadastroService: CadastroService
  ) {}

  get registerFormControl() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      funcao: new FormControl('', [Validators.required]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confsenha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get nome() {
    return this.form.get('nome')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get telefone() {
    return this.form.get('telefone')!;
  }

  get cpf() {
    return this.form.get('cpf')!;
  }

  get senha() {
    return this.form.get('senha')!;
  }

  get confsenha() {
    return this.form.get('confsenha')!;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    if (
      this.cadastroService.validarSenha(
        this.form.value.senha,
        this.form.value.confsenha
      )
    ) {
      return;
    }

    if (!this.cadastroService.saveOffLine(this.form.value)) {
      console.warn('error');
      this.toast.showMessageError('Item já existe na fila : (', 'Ops!!');
      this.onReset();
    } else {
      this.toast.showMessageSuccess('Item  salvo na fila : )', 'Eba!!');
      setTimeout(() => {
        this.router.navigateByUrl('dashboard');
      }, 1000);
    }
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
