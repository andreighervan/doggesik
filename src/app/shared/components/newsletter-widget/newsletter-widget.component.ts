import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-newsletter-widget',
  templateUrl: './newsletter-widget.component.html',
  styleUrls: ['./newsletter-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsletterWidgetComponent implements OnInit {
  submitted: boolean;
  @Input() color: string = '';
  newsletterForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private coreService: CoreService,
    private router: Router) { }

  ngOnInit() {
    this.buildNewsletterForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes.color.currentValue) {
        this.color = changes.color.currentValue;
      }
    }
  }

  buildNewsletterForm() {
    this.newsletterForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
    });
  }

  submit() {
    if (this.newsletterForm.invalid) {
      this.submitted = true;
      return;
    }
    const url = 'https://api.sendinblue.com/v3/contacts';
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': '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'
      },
      body: JSON.stringify({
        email: this.newsletterForm.controls['email'].value,
        attributes: { FIRSTNAME: this.newsletterForm.controls['name'].value },
        listIds: [9],
        updateEnabled: true
      })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.newsletterForm.reset();
        this.router.navigate(['/lp/thank-you-ebook']);
        window.scrollTo({ top: 0 });
      })
      .catch(err => console.error('error:' + err));
  }
}
