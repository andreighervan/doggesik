import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-left-section-contact-us',
  templateUrl: './left-section-contact-us.component.html',
  styleUrls: ['./left-section-contact-us.component.scss']
})
export class LeftSectionContactUsComponent implements OnInit {
  @Input() contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (!this.contactForm.valid) {
      return;
    }
    console.log(this.contactForm.value);
  }

}
