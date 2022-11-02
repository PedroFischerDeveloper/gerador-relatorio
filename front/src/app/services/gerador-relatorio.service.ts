import { Toast } from 'ngx-toastr';
import { Endereco } from './../shared/models/Endereco.model';
import { Agente } from './../shared/models/Agente.model';
import { Injectable } from '@angular/core';
import xlsx from 'json-as-xlsx';

@Injectable({
  providedIn: 'root',
})
export class GeradorRelatorioService {
  public listAgente: Array<Agente> = [];

  constructor() {
    const agente = new Agente();

    agente.id = 1;
    agente.nome = 'Pedro Fischer';
    agente.aviso = true;
    agente.funcao = 'Estagiário';
    agente.criadouro = 'Vaso de plantas';
    agente.larvas = false;
    agente.observacao = '';
    agente.responsavel = 'João';
    agente.atividade = 1;

    const end1 = new Endereco();
    const end2 = new Endereco();
    const endData = new Array<Endereco>();

    end1.rua = 'Rua Alagoas';
    (end1.numero = 250),
      (end1.bairro = 'Jardim R. Branco'),
      (end1.cidade = 'São Vicente'),
      (end2.rua = 'Rua Alagoas');
    (end2.numero = 250),
      (end2.bairro = 'Jardim R. Branco'),
      (end2.cidade = 'São Vicente'),
      endData.push(end1);
    endData.push(end2);

    agente.endereco = endData;
    this.listAgente.push(agente);
  }

  ngOnInit() {}

  list() {
    return this.listAgente;
  }

  criarExcel(id: number) {
    const headings = [
      [
        'Data',
        'L/Q - N da Casa',
        'Atividade',
        'Criadouro',
        'Larvas',
        'Aviso',
        'Responsável',
        'Observação',
        'Estagiários',
      ],
    ];

    let data = [
      {
        sheet: 'Módulo',
        columns: [
          { label: 'User', value: 'user' }, // Top level data
          { label: 'Age', value: 'age', format: '# "years"' }, // Column format
          {
            label: 'Phone',
            value: 'user.more.phone',
            format: '(###) ###-####',
          }, // Run functions
        ],
        content: [
          { user: 'Andrea', age: 20, more: { phone: '11111111' } },
          { user: 'Luis', age: 21, more: { phone: '12345678' } },
        ],
      },
      {
        sheet: 'Children',
        columns: [
          { label: 'User', value: 'user' }, // Top level data
          { label: 'Age', value: 'age', format: '# "years"' }, // Column format
          {
            label: 'Phone',
            value: 'user.more.phone',
            format: '(###) ###-####',
          }, // Deep props and column format
        ],
        content: [
          { user: 'Manuel', age: 16, more: { phone: 9999999900 } },
          { user: 'Ana', age: 17, more: { phone: 8765432135 } },
        ],
      },
    ];

    let settings = {
      fileName: 'Relatório da coleta', // Name of the resulting spreadsheet
      extraLength: 3, // A bigger number means that columns will be wider
      writeMode: 'writeFile', // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
      writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
      RTL: false, // Display the columns from right-to-left (the default value is false)
    };

    xlsx(data, settings); // Will download the excel file
  }

  gerarExcel() {
    const headings = [
      [
        'Data',
        'L/Q - N da Casa',
        'Atividade',
        'Criadouro',
        'Larvas',
        'Aviso',
        'Responsável',
        'Observação',
        'Estagiários',
      ],
    ];

    let data = [
      {
        sheet: 'Módulo',
        columns: [
          { label: 'Data', value: 'data' },
          { label: 'L/Q - N da Casa', value: 'LQ' },
          { label: 'Atividade', value: 'atividade' },
          { label: 'Criadouro', value: 'criadouro' },
          { label: 'Larvas', value: 'larvas' },
          { label: 'Aviso', value: 'aviso' },
          { label: 'Responsável', value: 'responsavel' },
          { label: 'Observação', value: 'observacao' },
          { label: 'Função', value: 'funcao' },
        ],
        content: [
          {
            data: 'Marcos',
            LQ: 20,
            atividade: 'teste',
            criadouro: 'teste',
            larvas: 'S',
            aviso: 'S',
            responsavel: 'pedro fischer',
            observacao: 'N',
            funcao: 'Estagiário',
          },
          {
            data: 'Marcos',
            LQ: 20,
            atividade: 'teste',
            criadouro: 'teste',
            larvas: 'S',
            aviso: 'S',
            responsavel: 'pedro fischer',
            observacao: 'N',
            funcao: 'Estagiário',
          },
          {
            data: 'Marcos',
            LQ: 20,
            atividade: 'teste',
            criadouro: 'teste',
            larvas: 'S',
            aviso: 'S',
            responsavel: 'pedro fischer',
            observacao: 'N',
            funcao: 'Estagiário',
          },
          {
            data: 'Marcos',
            LQ: 20,
            atividade: 'teste',
            criadouro: 'teste',
            larvas: 'S',
            aviso: 'S',
            responsavel: 'pedro fischer',
            observacao: 'N',
            funcao: 'Estagiário',
          },
          {
            data: 'Marcos',
            LQ: 20,
            atividade: 'teste',
            criadouro: 'teste',
            larvas: 'S',
            aviso: 'S',
            responsavel: 'pedro fischer',
            observacao: 'N',
            funcao: 'Estagiário',
          },
        ],
      },
    ];

    let settings = {
      fileName: 'Relatório da coleta', // Name of the resulting spreadsheet
      extraLength: 3, // A bigger number means that columns will be wider
      writeMode: 'writeFile', // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
      writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
      RTL: false, // Display the columns from right-to-left (the default value is false)
    };

    console.log('teste');
    xlsx(data, settings); // Will download the excel file
  }
}
