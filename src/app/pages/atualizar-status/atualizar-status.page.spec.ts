import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizarStatusPage } from './atualizar-status.page';

describe('AtualizarStatusPage', () => {
  let component: AtualizarStatusPage;
  let fixture: ComponentFixture<AtualizarStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
