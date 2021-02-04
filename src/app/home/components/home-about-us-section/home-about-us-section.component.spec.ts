import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutUsSectionComponent } from './home-about-us-section.component';

describe('HomeAboutUsSectionComponent', () => {
  let component: HomeAboutUsSectionComponent;
  let fixture: ComponentFixture<HomeAboutUsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAboutUsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
