import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { DadosService } from '../../services/dados.service';
import { Chamado } from '../../models/chamado';
import { Tecnico } from '../../models/tecnico';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.page.html',
  styleUrls: ['./cadastro-chamado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class CadastroChamadoPage implements OnInit {
  chamado: Partial<Chamado> = {
    prioridade: 'Baixa',
    status: 'Aberto'
  };

  tecnicos: Tecnico[] = [];

  constructor(
    private dadosService: DadosService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregarTecnicos();
  }

  ionViewWillEnter() {
    this.carregarTecnicos();
  }

  carregarTecnicos() {
    this.tecnicos = this.dadosService.listarTecnicos().filter(t => t.situacao === 'Ativo');
  }

  async salvar() {
    // Validações obrigatórias
    if (!this.chamado.solicitante || !this.chamado.titulo || !this.chamado.descricao || !this.chamado.prioridade || !this.chamado.tecnico) {
      const toast = await this.toastCtrl.create({
        message: 'Preencha todos os campos obrigatórios!',
        duration: 2500,
        color: 'danger',
        position: 'top'
      });
      await toast.present();
      return;
    }

    // Adiciona o chamado
    this.dadosService.adicionarChamado(this.chamado as Chamado);
    
    // Toast de sucesso
    const toastSuccess = await this.toastCtrl.create({
      message: 'Chamado salvo com sucesso!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    await toastSuccess.present();

    // Limpar formulário
    this.chamado = {
      prioridade: 'Baixa',
      status: 'Aberto'
    };

    // Navegar de volta ou para a lista
    this.router.navigate(['/lista-chamados']);
  }
}
