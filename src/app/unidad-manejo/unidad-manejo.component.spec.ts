import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadManejoComponent } from './unidad-manejo.component';

describe('UnidadManejoComponent', () => {
  let component: UnidadManejoComponent;
  let fixture: ComponentFixture<UnidadManejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadManejoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadManejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
