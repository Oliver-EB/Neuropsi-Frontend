import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasListComponent } from './pruebas-list.component';

describe('PruebasListComponent', () => {
  let component: PruebasListComponent;
  let fixture: ComponentFixture<PruebasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
