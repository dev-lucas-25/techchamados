import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroChamadoPage } from './cadastro-chamado.page';

describe('CadastroChamadoPage', () => {
  let component: CadastroChamadoPage;
  let fixture: ComponentFixture<CadastroChamadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroChamadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
