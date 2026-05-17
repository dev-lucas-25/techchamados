import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { DadosService } from '../../services/dados.service';
import { Chamado } from '../../models/chamado';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-chamados',
  templateUrl: './lista-chamados.page.html',
  styleUrls: ['./lista-chamados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ListaChamadosPage implements OnInit {
  chamados: Chamado[] = [];

  constructor(
    private dadosService: DadosService,
    private router: Router,
    private alertController: AlertController
  ) {
    addIcons({
       'add-outline': add
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carregarChamados();
  }

  carregarChamados() {
    this.chamados = this.dadosService.listarChamados();
  }

  verDetalhes(id: string) {
    this.router.navigate(['/detalhes-chamado', id]);
  }

  async confirmarExclusao(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: 'Deseja realmente excluir este chamado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {
            this.dadosService.excluirChamado(id);
            this.carregarChamados();
          }
        }
      ]
    });

    await alert.present();
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
