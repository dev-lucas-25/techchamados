import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTecnicosPage } from './lista-tecnicos.page';

describe('ListaTecnicosPage', () => {
  let component: ListaTecnicosPage;
  let fixture: ComponentFixture<ListaTecnicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTecnicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
