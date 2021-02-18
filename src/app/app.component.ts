import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CoreService } from './core/services/core.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gesiklo';
  showComponent$: Observable<boolean>;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.showComponent$ = this.coreService.getComponentState();
  }

}
