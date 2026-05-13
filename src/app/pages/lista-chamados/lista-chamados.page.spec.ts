import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaChamadosPage } from './lista-chamados.page';

describe('ListaChamadosPage', () => {
  let component: ListaChamadosPage;
  let fixture: ComponentFixture<ListaChamadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaChamadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
