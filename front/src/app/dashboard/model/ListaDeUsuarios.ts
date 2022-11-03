import { Coleta } from './Coleta';

export class ListaDeUsuarios {
  id: number = 0;
  nome: string = '';
  funcao: string = '';
  email: string = '';
  cpf: string = '';
  perfis: number[] = [];
  telefone: string = '';
  coleta: Coleta[] = [];
}
