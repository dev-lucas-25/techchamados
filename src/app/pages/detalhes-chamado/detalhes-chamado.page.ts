import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DadosService } from '../../services/dados.service';
import { Chamado } from '../../models/chamado';

@Component({
  selector: 'app-detalhes-chamado',
  templateUrl: './detalhes-chamado.page.html',
  styleUrls: ['./detalhes-chamado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class DetalhesChamadoPage implements OnInit {
  chamado: Chamado | undefined;

  constructor(
    private route: ActivatedRoute,
    private dadosService: DadosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carregarDetalhes();
  }

  carregarDetalhes() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.chamado = this.dadosService.getChamadoById(id);
    }
    
    if (!this.chamado) {
      // Se não encontrar, volta pra lista
      this.router.navigate(['/lista-chamados']);
    }
  }

  atualizarStatus() {
    if (this.chamado) {
      this.router.navigate(['/atualizar-status', this.chamado.id]);
    }
  }

  getPrioridadeColor(prioridade: string): string {
    switch(prioridade) {
      case 'Baixa': return 'success';
      case 'Média': return 'warning';
      case 'Alta': return 'danger';
      case 'Urgente': return 'dark';
      default: return 'medium';
    }
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'Aberto': return 'danger';
      case 'Em atendimento': return 'warning';
      case 'Concluído': return 'success';
      case 'Cancelado': return 'medium';
      default: return 'medium';
    }
  }
}
