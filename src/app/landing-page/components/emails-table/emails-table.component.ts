import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscribers } from 'src/app/blog/models/blog';

import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-emails-table',
  templateUrl: './emails-table.component.html',
  styleUrls: ['./emails-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailsTableComponent implements OnInit {

  dataSource$: Observable<Subscribers[]>

  displayedColumns: string[] = ['position', 'name', 'email'];

  loading = false;
  buttionText = "Submit";

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }

    this.dataSource$ = this.coreService.getSubscribers()
  }

  sendMail() {

    let user = {
      name: 'andrei',
      email: 'andrei.ghervan7@gmail.com'
    }
    debugger;
    this.coreService.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        debugger;
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      }, () => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }

}
