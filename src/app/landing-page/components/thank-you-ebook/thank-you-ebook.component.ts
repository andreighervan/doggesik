import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-thank-you-ebook',
  templateUrl: './thank-you-ebook.component.html',
  styleUrls: ['./thank-you-ebook.component.scss']
})
export class ThankYouEbookComponent implements OnInit {

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }
  }

}
