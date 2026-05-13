import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
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
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carregarTecnicos();
  }

  carregarTecnicos() {
    this.tecnicos = this.dadosService.listarTecnicos();
  }

  async confirmarExclusao(id: string) {
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
            this.dadosService.excluirTecnico(id);
            this.carregarTecnicos();
          }
        }
      ]
    });

    await alert.present();
  }
}
