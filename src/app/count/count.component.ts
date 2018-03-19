import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  @Input() value = 0;
  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.value++;
    this.changeValue.emit({ newValue: this.value });
  }

  onSubtract() {
    this.value--;
    this.changeValue.emit({ newValue: this.value });
  }

}
