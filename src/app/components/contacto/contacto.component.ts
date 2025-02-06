import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  submitted = false;

  ngOnInit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {

      const form = document.querySelector('form');
      if (form) {
        form.submit();
      }
    }
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    console.log(this.contactForm.value);
  }
  get f() { return this.contactForm.controls; }

}
