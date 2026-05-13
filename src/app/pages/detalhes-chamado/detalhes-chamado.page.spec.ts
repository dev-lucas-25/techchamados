import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesChamadoPage } from './detalhes-chamado.page';

describe('DetalhesChamadoPage', () => {
  let component: DetalhesChamadoPage;
  let fixture: ComponentFixture<DetalhesChamadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesChamadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
