import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilesEscolaresComponent } from './utiles-escolares.component';

describe('UtilesEscolaresComponent', () => {
  let component: UtilesEscolaresComponent;
  let fixture: ComponentFixture<UtilesEscolaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilesEscolaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilesEscolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
