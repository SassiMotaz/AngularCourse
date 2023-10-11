import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() { 
    this.init();
  }

  init (): void {
    this.insert({
      name: 'John',
      email: 'johan@doe.com',
      message: 'Hello World!'
    });
    this.insert({
      name: 'Motaz',
      email: 'motaz@doe.com',
      message: 'Test for Motaz'
    });
    this.insert({
      name: 'ali',
      email: 'ali@doee.com',
      message: 'Test for ali'
    });
  }

  insert(message:{name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages(): any {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
