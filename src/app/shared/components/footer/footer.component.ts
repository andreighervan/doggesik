import { Component, OnInit, ViewEncapsulation } from '@angular/core';
<<<<<<< HEAD
=======

>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
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
