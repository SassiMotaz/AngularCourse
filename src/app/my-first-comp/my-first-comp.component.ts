import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  isSubmitted: boolean = false;
  messages: Array<any> = [];

  onSubmit() {
    console.log(this.name, this.email, this.message);
    this.isSubmitted = true;
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message
    });     
  }

  deleteMessage(index: number) {
    console.log('delete', index);
    this.messages.splice(index, 1);
  }
}
