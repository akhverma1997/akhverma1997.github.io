import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  loading = false;
  success = false;
  errorMsg = '';

  openMail(form: NgForm) {
    if (form.invalid) return;

    const name = encodeURIComponent(form.value.contactName || '');
    const email = encodeURIComponent(form.value.contactEmail || '');
    const subject = encodeURIComponent(form.value.contactSubject || 'Portfolio Contact');
    const message = encodeURIComponent(form.value.contactMessage || '');

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:akhverma1997@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;

    this.success = true;
    form.resetForm();
  }
}
