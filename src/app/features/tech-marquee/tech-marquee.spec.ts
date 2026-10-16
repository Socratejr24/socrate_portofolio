import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechMarquee } from './tech-marquee';

describe('TechMarquee', () => {
  let component: TechMarquee;
  let fixture: ComponentFixture<TechMarquee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechMarquee],
    }).compileComponents();

    fixture = TestBed.createComponent(TechMarquee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
