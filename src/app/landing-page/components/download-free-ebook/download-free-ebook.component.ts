import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-download-free-ebook',
  templateUrl: './download-free-ebook.component.html',
  styleUrls: ['./download-free-ebook.component.scss']
})
export class DownloadFreeEbookComponent implements OnInit {

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }
  }

}
