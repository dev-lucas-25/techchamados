import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
import { IonicModule, ModalController } from '@ionic/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DadosService } from '../../../services/dados.service';
import { Chamado } from '../../../models/chamado';

@Component({
  selector: 'app-prioridades-modal',
  templateUrl: './prioridades-modal.component.html',
  styleUrls: ['./prioridades-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, NgCircleProgressModule]
})
export class PrioridadesModalComponent implements OnInit {
  @Input() status!: string;

  total = 0;
  prioridades = {
    baixa: 0,
    media: 0,
    alta: 0,
    urgente: 0
  };

  constructor(
    private modalCtrl: ModalController,
    private dadosService: DadosService
  ) {
     addIcons({
    'close-outline': closeOutline
  });
  }

  ngOnInit() {
    this.calcularPrioridades();
  }

  calcularPrioridades() {
    const chamados = this.dadosService.listarChamados();
    const filtrados = chamados.filter(c => c.status === this.status);
    
    this.total = filtrados.length;
    
    this.prioridades.baixa = filtrados.filter(c => c.prioridade === 'Baixa').length;
    this.prioridades.media = filtrados.filter(c => c.prioridade === 'Média').length;
    this.prioridades.alta = filtrados.filter(c => c.prioridade === 'Alta').length;
    this.prioridades.urgente = filtrados.filter(c => c.prioridade === 'Urgente').length;
  }

  getPercent(valor: number): number {
    if (this.total === 0) return 0;
    return (valor / this.total) * 100;
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }
}
