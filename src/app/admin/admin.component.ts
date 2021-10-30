import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/services/core.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.setComponentState(false)
  }

}
