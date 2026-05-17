import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add} from 'ionicons/icons';
import { DadosService } from '../../services/dados.service';
import { Tecnico } from '../../models/tecnico';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-tecnicos',
  templateUrl: './lista-tecnicos.page.html',
  styleUrls: ['./lista-tecnicos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ListaTecnicosPage implements OnInit {
  tecnicos: Tecnico[] = [];

  constructor(
    private dadosService: DadosService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
     addIcons({
    'add': add
  });
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carregarTecnicos();
  }

  carregarTecnicos() {
    this.tecnicos = this.dadosService.listarTecnicos();
  }

  async alterarSituacao(tecnico: Tecnico) {
    const novaSituacao = tecnico.situacao === 'Ativo' ? 'Inativo' : 'Ativo';
    this.dadosService.alterarSituacaoTecnico(tecnico.id, novaSituacao);
    
    const toast = await this.toastController.create({
      message: `Técnico ${novaSituacao.toLowerCase()} com sucesso.`,
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    await toast.present();
    
    this.carregarTecnicos();
  }

  podeExcluir(tecnico: Tecnico): boolean {
    return !this.dadosService.temChamadosVinculados(tecnico.nome);
  }

  async excluirTecnico(tecnico: Tecnico) {

    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: 'Deseja realmente excluir este técnico?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {
            this.dadosService.excluirTecnico(tecnico.id);
            this.carregarTecnicos();
          }
        }
      ]
    });

    await alert.present();
  }
}
