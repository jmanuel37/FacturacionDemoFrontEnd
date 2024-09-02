import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenCompComponent } from './lista-orden-comp.component';

describe('ListaOrdenCompComponent', () => {
  let component: ListaOrdenCompComponent;
  let fixture: ComponentFixture<ListaOrdenCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdenCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOrdenCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
