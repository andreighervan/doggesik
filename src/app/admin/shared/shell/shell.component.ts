import { Component } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'admin-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent {
  constructor(private coreService: CoreService) {
    this.coreService.setComponentState(false)
  }
}
