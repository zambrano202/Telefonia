import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLineaComponent } from './registro-linea.component';

describe('RegistroLineaComponent', () => {
  let component: RegistroLineaComponent;
  let fixture: ComponentFixture<RegistroLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
