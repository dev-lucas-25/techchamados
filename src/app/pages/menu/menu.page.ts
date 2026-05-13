import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class MenuPage implements OnInit {

  menuItems = [
    { title: 'Novo Chamado', icon: 'add-circle', route: '/cadastro-chamado', color: 'primary' },
    { title: 'Chamados', icon: 'list', route: '/lista-chamados', color: 'secondary' },
    { title: 'Novo Técnico', icon: 'person-add', route: '/cadastro-tecnico', color: 'tertiary' },
    { title: 'Técnicos', icon: 'people', route: '/lista-tecnicos', color: 'success' },
    { title: 'Resumo', icon: 'pie-chart', route: '/resumo', color: 'warning' },
    { title: 'Sobre', icon: 'information-circle', route: '/sobre', color: 'medium' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/login']);
  }
}
