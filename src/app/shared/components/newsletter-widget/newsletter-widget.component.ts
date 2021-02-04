import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-newsletter-widget',
  templateUrl: './newsletter-widget.component.html',
  styleUrls: ['./newsletter-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsletterWidgetComponent implements OnInit {
  @Input() color: string = '';
  newsletterForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private coreService: CoreService) { }

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
