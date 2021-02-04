<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';
=======
import { TestBed, async } from '@angular/core/testing';
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
<<<<<<< HEAD
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
=======
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gesiklo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
<<<<<<< HEAD
    const app = fixture.componentInstance;
=======
    const app = fixture.debugElement.componentInstance;
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
    expect(app.title).toEqual('gesiklo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
<<<<<<< HEAD
    const compiled = fixture.nativeElement;
=======
    const compiled = fixture.debugElement.nativeElement;
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
    expect(compiled.querySelector('.content span').textContent).toContain('gesiklo app is running!');
  });
});
