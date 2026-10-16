import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypingEffect } from './typing-effect';

describe('TypingEffect', () => {
  let component: TypingEffect;
  let fixture: ComponentFixture<TypingEffect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingEffect],
    }).compileComponents();

    fixture = TestBed.createComponent(TypingEffect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
