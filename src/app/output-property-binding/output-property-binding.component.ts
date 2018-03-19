import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property-binding',
  templateUrl: './output-property-binding.component.html',
  styleUrls: ['./output-property-binding.component.css']
})
export class OutputPropertyBindingComponent implements OnInit {
  value = 10;

  constructor() { }

  ngOnInit() {
  }

  onChangeValue(event) {
    console.log('change value ', event.newValue);
  }

}
