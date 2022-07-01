import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueModalComponent } from './dialogue-modal.component';

describe('DialogueModalComponent', () => {
  let component: DialogueModalComponent;
  let fixture: ComponentFixture<DialogueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogueModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
