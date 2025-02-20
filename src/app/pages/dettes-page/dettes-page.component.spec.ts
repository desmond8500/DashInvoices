import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettesPageComponent } from './dettes-page.component';

describe('DettesPageComponent', () => {
  let component: DettesPageComponent;
  let fixture: ComponentFixture<DettesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
