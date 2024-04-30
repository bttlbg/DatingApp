import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};

  constructor() {}

  ngonInit(): void {}

  register() {
    console.log(this.model);
  }

  cancel() {
    console.log('cancelled');
  }
}
