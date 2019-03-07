import {Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Input() imageUrl: string;
  @Input() pageTitle: string;
  emailSent = false;
  selectedValue;
  formShowing = false;
  constructor(private _http: HttpClient) {
  }
  onSubmit(filter) {
    const message = 'name=' + JSON.stringify(filter);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this._http.post('http://elisheducation.com/contact-form-app.php', message, httpOptions).subscribe((data) => {
      this.emailSent = true;
    });
  }
}
