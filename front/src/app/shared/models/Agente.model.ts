import { Endereco } from './Endereco.model';

export class Agente {
  id: number = 0;
  nome: string = '';
  atividade: number = 0;
  criadouro: string = '';
  larvas: boolean = false;
  aviso: boolean = false;
  responsavel: string = '';
  funcao: string = '';
  observacao: string = '';
  endereco: Array<Endereco> = [];
}
