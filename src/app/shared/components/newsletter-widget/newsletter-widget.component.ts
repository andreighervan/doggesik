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
    this.coreService.subscribeToList(this.newsletterForm.value)
      .subscribe(res => {
        this.newsletterForm.reset();
        this.router.navigate(['/lp/thank-you-ebook']);
        window.scrollTo({ top: 0 });
      }, err => {
        console.log(err);
      })
  }
}
