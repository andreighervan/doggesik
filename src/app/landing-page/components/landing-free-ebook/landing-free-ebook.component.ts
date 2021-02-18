import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-landing-free-ebook',
  templateUrl: './landing-free-ebook.component.html',
  styleUrls: ['./landing-free-ebook.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingFreeEbookComponent implements OnInit {
  newsletterForm: FormGroup;

  constructor(private coreService: CoreService, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }

    this.buildNewsletterForm();
  }


  buildNewsletterForm() {
    this.newsletterForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
    });
  }

  submit() {
    if (!this.newsletterForm.valid) {
      return;
    }
    this.coreService.saveSubscriber(this.newsletterForm.value)
      .then(
        res => {
          this.newsletterForm.reset();
        }
      )
  }
}
