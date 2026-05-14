import { Injectable } from '@angular/core';
import { Chamado } from '../models/chamado';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
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
      status: 'Aberto'
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
      status: 'Em atendimento'
    }
  ];

  private tecnicos: Tecnico[] = [
    {
      id: '1',
      nome: 'Maria',
      especialidade: 'Hardware',
      contato: 'maria@empresa.com',
      situacao: 'Ativo'
    },
    {
      id: '2',
      nome: 'Pedro',
      especialidade: 'Software',
      contato: 'pedro@empresa.com',
      situacao: 'Ativo'
    }
  ];

  constructor() { }

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
    return this.chamados.find(c => c.id === id);
  }

  excluirChamado(id: string) {
    this.chamados = this.chamados.filter(c => c.id !== id);
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
    return this.tecnicos.find(t => t.id === id);
  }

  excluirTecnico(id: string) {
    this.tecnicos = this.tecnicos.filter(t => t.id !== id);
  }

  temChamadosVinculados(nomeTecnico: string): boolean {
    return this.chamados.some(c => c.tecnico === nomeTecnico);
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
    const abertos = this.chamados.filter(c => c.status === 'Aberto').length;
    const concluidos = this.chamados.filter(c => c.status === 'Concluído').length;
    const urgentes = this.chamados.filter(c => c.prioridade === 'Urgente').length;

    return { total, abertos, concluidos, urgentes };
  }
}
