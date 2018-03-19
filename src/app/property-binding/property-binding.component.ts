import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  @Input() isSave: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log('propertyBinding', this.isSave);
  }

}
