import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMainAboutUsComponent } from './section-main-about-us.component';

describe('SectionMainAboutUsComponent', () => {
  let component: SectionMainAboutUsComponent;
  let fixture: ComponentFixture<SectionMainAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMainAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
