import { Injectable } from '@angular/core';
import { Chamado } from '../models/chamado';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  private chamados: Chamado[] = [
    {
      id: '1',
      solicitante: 'João Silva',
      setor: 'Administração',
      titulo: 'Computador não liga',
      descricao: 'Ao tentar ligar, a fonte faz barulho mas não dá vídeo.',
      prioridade: 'Alta',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Maria',
      status: 'Aberto',
    },
    {
      id: '2',
      solicitante: 'Ana Oliveira',
      setor: 'RH',
      titulo: 'Instalar sistema ERP',
      descricao: 'Preciso do sistema instalado no meu novo notebook.',
      prioridade: 'Média',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Pedro',
      status: 'Em atendimento',
    },
    {
      id: '3',
      solicitante: 'Pedro Santos',
      setor: 'Financeiro',
      titulo: 'Impressora não imprime',
      descricao: 'A impressora está sem toner.',
      prioridade: 'Baixa',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Maria',
      status: 'Concluído',
    },
    {
      id: '4',
      solicitante: 'Carla Dias',
      setor: 'Marketing',
      titulo: 'Configurar e-mail no celular',
      descricao: 'Preciso configurar o e-mail corporativo no iPhone.',
      prioridade: 'Média',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Pedro',
      status: 'Concluído',
    },
    {
      id: '5',
      solicitante: 'Rafael Costa',
      setor: 'TI',
      titulo: 'Acesso ao servidor negado',
      descricao: 'Não consigo acessar a pasta de projetos.',
      prioridade: 'Urgente',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Lucas',
      status: 'Cancelado',
    },
    {
      id: '6',
      solicitante: 'Fernanda Lima',
      setor: 'RH',
      titulo: 'Erro no sistema de ponto',
      descricao: 'O sistema está marcando presença duplicada.',
      prioridade: 'Alta',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Maria',
      status: 'Em atendimento',
    },
    {
      id: '7',
      solicitante: 'Bruno Alves',
      setor: 'Financeiro',
      titulo: 'Sem acesso ao banco',
      descricao: 'Não consigo conectar ao banco de dados SQL Server.',
      prioridade: 'Urgente',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Pedro',
      status: 'Aberto',
    },
    {
      id: '8',
      solicitante: 'Juliana Mendes',
      setor: 'Administração',
      titulo: 'Mouse com defeito',
      descricao: 'O mouse trava o cursor na tela.',
      prioridade: 'Baixa',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Maria',
      status: 'Concluído',
    },
    {
      id: '9',
      solicitante: 'Carlos Souza',
      setor: 'Logística',
      titulo: 'Instalar impressora fiscal',
      descricao: 'Preciso instalar a impressora fiscal no caminhão.',
      prioridade: 'Alta',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Marcos',
      status: 'Em atendimento',
    },
    {
      id: '10',
      solicitante: 'Patricia Lima',
      setor: 'Marketing',
      titulo: 'Problema de iluminação no escritório',
      descricao: 'A lâmpada de LED do teto queimou.',
      prioridade: 'Média',
      dataAbertura: new Date().toISOString(),
      tecnico: 'Lucas',
      status: 'Cancelado',
    },
  ];

  private tecnicos: Tecnico[] = [
    {
      id: '1',
      nome: 'Maria',
      especialidade: 'Hardware',
      contato: 'maria@empresa.com',
      situacao: 'Ativo',
    },
    {
      id: '2',
      nome: 'Pedro',
      especialidade: 'Software',
      contato: 'pedro@empresa.com',
      situacao: 'Ativo',
    },
    {
      id: '3',
      nome: 'Lucas',
      especialidade: 'Hardware',
      contato: 'lucas@empresa.com',
      situacao: 'Ativo',
    },
    {
      id: '4',
      nome: 'Marcos',
      especialidade: 'Impressora',
      contato: 'marcos@empresa.com',
      situacao: 'Ativo',
    },
  ];

  constructor() {}

  // CHAMADOS
  adicionarChamado(chamado: Chamado) {
    chamado.id = Math.random().toString(36).substr(2, 9);
    chamado.dataAbertura = new Date().toISOString();
    chamado.status = 'Aberto';
    this.chamados.push(chamado);
  }

  listarChamados() {
    return this.chamados;
  }

  getChamadoById(id: string): Chamado | undefined {
    return this.chamados.find((c) => c.id === id);
  }

  excluirChamado(id: string) {
    this.chamados = this.chamados.filter((c) => c.id !== id);
  }

  atualizarStatus(id: string, novoStatus: any, observacao: string) {
    const chamado = this.getChamadoById(id);
    if (chamado) {
      chamado.status = novoStatus;
      if (observacao) {
        chamado.observacao = observacao;
      }
    }
  }

  // TÉCNICOS
  adicionarTecnico(tecnico: Tecnico) {
    tecnico.id = Math.random().toString(36).substr(2, 9);
    this.tecnicos.push(tecnico);
  }

  listarTecnicos() {
    return this.tecnicos;
  }

  getTecnicoById(id: string): Tecnico | undefined {
    return this.tecnicos.find((t) => t.id === id);
  }

  excluirTecnico(id: string) {
    this.tecnicos = this.tecnicos.filter((t) => t.id !== id);
  }

  temChamadosVinculados(nomeTecnico: string): boolean {
    return this.chamados.some((c) => c.tecnico === nomeTecnico);
  }

  alterarSituacaoTecnico(id: string, novaSituacao: 'Ativo' | 'Inativo') {
    const tecnico = this.getTecnicoById(id);
    if (tecnico) {
      tecnico.situacao = novaSituacao;
    }
  }

  // DASHBOARD
  getDashboardResumo() {
    const total = this.chamados.length;
    const abertos = this.chamados.filter((c) => c.status === 'Aberto').length;
    const cancelados = this.chamados.filter(
      (c) => c.status === 'Cancelado',
    ).length;
    const atendimento = this.chamados.filter(
      (c) => c.status === 'Em atendimento',
    ).length;
    const concluidos = this.chamados.filter(
      (c) => c.status === 'Concluído',
    ).length;
    const baixa = this.chamados.filter((c) => c.prioridade === 'Baixa').length;
    const media = this.chamados.filter((c) => c.prioridade === 'Média').length;
    const alta = this.chamados.filter((c) => c.prioridade === 'Alta').length;
    const urgentes = this.chamados.filter(
      (c) => c.prioridade === 'Urgente',
    ).length;
    return {
      total,
      abertos,
      cancelados,
      atendimento,
      concluidos,
      baixa,
      media,
      alta,
      urgentes,
    };
  }
}
