import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechCards } from './tech-cards';

describe('TechCards', () => {
  let component: TechCards;
  let fixture: ComponentFixture<TechCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCards],
    }).compileComponents();

    fixture = TestBed.createComponent(TechCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
