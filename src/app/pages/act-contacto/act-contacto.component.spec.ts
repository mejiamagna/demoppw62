import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActContactoComponent } from './act-contacto.component';

describe('ActContactoComponent', () => {
  let component: ActContactoComponent;
  let fixture: ComponentFixture<ActContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
