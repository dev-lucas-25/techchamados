import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResumoPage implements OnInit {
  resumo = {
    total: 0,
    abertos: 0,
    concluidos: 0,
    urgentes: 0
  };

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carregarResumo();
  }

  carregarResumo() {
    this.resumo = this.dadosService.getDashboardResumo();
  }
}
