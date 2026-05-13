import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroTecnicoPage } from './cadastro-tecnico.page';

describe('CadastroTecnicoPage', () => {
  let component: CadastroTecnicoPage;
  let fixture: ComponentFixture<CadastroTecnicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
