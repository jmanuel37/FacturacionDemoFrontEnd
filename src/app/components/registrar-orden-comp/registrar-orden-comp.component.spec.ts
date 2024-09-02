import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOrdenCompComponent } from './registrar-orden-comp.component';

describe('RegistrarOrdenCompComponent', () => {
  let component: RegistrarOrdenCompComponent;
  let fixture: ComponentFixture<RegistrarOrdenCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarOrdenCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarOrdenCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
