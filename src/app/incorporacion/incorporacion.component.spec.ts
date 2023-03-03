import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorporacionComponent } from './incorporacion.component';

describe('IncorporacionComponent', () => {
  let component: IncorporacionComponent;
  let fixture: ComponentFixture<IncorporacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorporacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncorporacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
