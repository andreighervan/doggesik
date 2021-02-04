import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSectionContactUsComponent } from './left-section-contact-us.component';

describe('LeftSectionContactUsComponent', () => {
  let component: LeftSectionContactUsComponent;
  let fixture: ComponentFixture<LeftSectionContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSectionContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSectionContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
