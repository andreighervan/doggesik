import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  colorForm = 'white';
  showCookieSection = true;
  constructor() { }

  ngOnInit() {
    const show = localStorage.getItem('show');
    if (show === 'true') {
      this.showCookieSection = false;
    }
  }

  allowCookie() {
    this.showCookieSection = false;
    localStorage.setItem('show', 'true');
  }

}
