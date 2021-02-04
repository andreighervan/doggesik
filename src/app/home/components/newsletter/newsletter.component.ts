import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsletterComponent implements OnInit {
  color = "blue";
  constructor() { }

  ngOnInit() {
  }

}
