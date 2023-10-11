import { Component } from '@angular/core';
import { MyFirstService } from '../Service/my-first.service';

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

  constructor(
    private myFirstService: MyFirstService
  ) {
    this.messages = this.myFirstService.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    console.log(this.name, this.email, this.message);
    this.isSubmitted = true;
    this.myFirstService.insert({
      name: this.name,
      email: this.email,
      message: this.message
    });     
  }

  deleteMessage(index: number) {
    this.myFirstService.deleteMessage(index);
  }
}
