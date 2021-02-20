import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouEbookComponent } from './thank-you-ebook.component';

describe('ThankYouEbookComponent', () => {
  let component: ThankYouEbookComponent;
  let fixture: ComponentFixture<ThankYouEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouEbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
