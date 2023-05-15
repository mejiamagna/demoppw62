import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormulariosComponent } from './list-formularios.component';

describe('ListFormulariosComponent', () => {
  let component: ListFormulariosComponent;
  let fixture: ComponentFixture<ListFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFormulariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
