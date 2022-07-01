import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnCreationFormComponent } from './column-creation-form.component';

describe('ColumnCreationFormComponent', () => {
  let component: ColumnCreationFormComponent;
  let fixture: ComponentFixture<ColumnCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnCreationFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
