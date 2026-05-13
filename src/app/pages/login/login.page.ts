import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async fazerLogin() {
    if (this.usuario.trim() === '' || this.senha.trim() === '') {
      const toast = await this.toastCtrl.create({
        message: 'Preencha usuário e senha obrigatórios!',
        duration: 2500,
        color: 'danger',
        position: 'top'
      });
      await toast.present();
    } else {
      this.router.navigate(['/menu']);
    }
  }
}
