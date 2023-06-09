import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActFormularioComponent } from './act-formulario.component';

describe('ActFormularioComponent', () => {
  let component: ActFormularioComponent;
  let fixture: ComponentFixture<ActFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
