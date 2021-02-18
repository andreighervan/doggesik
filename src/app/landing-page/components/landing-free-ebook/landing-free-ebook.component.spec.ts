import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFreeEbookComponent } from './landing-free-ebook.component';

describe('LandingFreeEbookComponent', () => {
  let component: LandingFreeEbookComponent;
  let fixture: ComponentFixture<LandingFreeEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFreeEbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFreeEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
