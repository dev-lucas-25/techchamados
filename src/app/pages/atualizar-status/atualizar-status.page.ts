import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DadosService } from '../../services/dados.service';
import { Chamado } from '../../models/chamado';

@Component({
  selector: 'app-atualizar-status',
  templateUrl: './atualizar-status.page.html',
  styleUrls: ['./atualizar-status.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class AtualizarStatusPage implements OnInit {
  chamadoId: string = '';
  novoStatus: any = '';
  novaObservacao: string = '';

  constructor(
    private route: ActivatedRoute,
    private dadosService: DadosService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.chamadoId = id;
      const chamado = this.dadosService.getChamadoById(id);
      if (chamado) {
        this.novoStatus = chamado.status;
        this.novaObservacao = chamado.observacao || '';
      } else {
        this.router.navigate(['/lista-chamados']);
      }
    }
  }

  async salvarAtualizacao() {
    this.dadosService.atualizarStatus(this.chamadoId, this.novoStatus, this.novaObservacao);

    const toast = await this.toastCtrl.create({
      message: 'Status atualizado com sucesso!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    await toast.present();

    this.router.navigate(['/detalhes-chamado', this.chamadoId]);
  }
}
