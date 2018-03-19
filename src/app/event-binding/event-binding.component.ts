import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  inputText: string = null;
  finallyText: string = null;

  ngOnInit() {
  }

  onClick(event) {
    alert('hellow EventBinding');
  }

  onKeyup(event: KeyboardEvent) {
    this.inputText = (<HTMLInputElement>(event.target)).value;
  }

  onKeyupEnter(value) {
    this.finallyText = value;
  }
}
