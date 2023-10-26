import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetectorEdadPage } from './detector-edad.page';

describe('DetectorEdadPage', () => {
  let component: DetectorEdadPage;
  let fixture: ComponentFixture<DetectorEdadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetectorEdadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
