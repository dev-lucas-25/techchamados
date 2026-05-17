import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { DadosService } from '../../services/dados.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PrioridadesModalComponent } from './prioridades-modal/prioridades-modal.component';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    NgCircleProgressModule
  ]
})
export class ResumoPage implements OnInit {
  resumo = {
    total: 0,
    abertos: 0,
    concluidos: 0,
    cancelados:0,
    atendimento:0,
    baixa:0,
    media:0,
    alta:0,
    urgentes: 0
  };

  constructor(
    private dadosService: DadosService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carregarResumo();
  }

  carregarResumo() {
    this.resumo = this.dadosService.getDashboardResumo();
  }

  getPercent(valor: number): number {
    if (this.resumo.total === 0) return 0;
    return (valor / this.resumo.total) * 100;
  }

  async abrirModalPrioridades(status: string) {
    const modal = await this.modalCtrl.create({
      component: PrioridadesModalComponent,
      componentProps: {
        status: status
      },
      cssClass: 'premium-modal',
      animated: true
    });
    return await modal.present();
  }
}
