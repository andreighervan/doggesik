import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit, AfterViewInit {
  @Input() blogContent;
  @ViewChild('button', { static: false }) button: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const click$ = fromEvent(this.button.nativeElement, 'click');
    click$.subscribe(val => console.log('hi'))

  }

  test() {
    debugger;
    console.log("testing");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit", this.button);
  }

}
