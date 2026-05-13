import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { DadosService } from '../../services/dados.service';
import { Tecnico } from '../../models/tecnico';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-tecnico',
  templateUrl: './cadastro-tecnico.page.html',
  styleUrls: ['./cadastro-tecnico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class CadastroTecnicoPage implements OnInit {
  tecnico: Partial<Tecnico> = {
    situacao: 'Ativo'
  };

  constructor(
    private dadosService: DadosService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async salvar() {
    if (!this.tecnico.nome || !this.tecnico.especialidade || !this.tecnico.contato) {
      const toast = await this.toastCtrl.create({
        message: 'Preencha nome, especialidade e contato obrigatórios!',
        duration: 2500,
        color: 'danger',
        position: 'top'
      });
      await toast.present();
      return;
    }

    this.dadosService.adicionarTecnico(this.tecnico as Tecnico);

    const toastSuccess = await this.toastCtrl.create({
      message: 'Técnico cadastrado com sucesso!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    await toastSuccess.present();

    this.tecnico = { situacao: 'Ativo' };
    this.router.navigate(['/lista-tecnicos']);
  }
}
