import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFeatureCardComponent } from './welcome-feature-card.component';

describe('WelcomeFeatureCardComponent', () => {
  let component: WelcomeFeatureCardComponent;
  let fixture: ComponentFixture<WelcomeFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeFeatureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
