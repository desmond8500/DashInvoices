import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatsPageComponent } from './achats-page.component';

describe('AchatsPageComponent', () => {
  let component: AchatsPageComponent;
  let fixture: ComponentFixture<AchatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
