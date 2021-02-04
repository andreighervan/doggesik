import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterWidgetComponent } from './newsletter-widget.component';

describe('NewsletterWidgetComponent', () => {
  let component: NewsletterWidgetComponent;
  let fixture: ComponentFixture<NewsletterWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
