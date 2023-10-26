import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PredictorGeneroPage } from './predictor-genero.page';

describe('PredictorGeneroPage', () => {
  let component: PredictorGeneroPage;
  let fixture: ComponentFixture<PredictorGeneroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PredictorGeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
