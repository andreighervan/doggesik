import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFreeEbookComponent } from './download-free-ebook.component';

describe('DownloadFreeEbookComponent', () => {
  let component: DownloadFreeEbookComponent;
  let fixture: ComponentFixture<DownloadFreeEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadFreeEbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFreeEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
