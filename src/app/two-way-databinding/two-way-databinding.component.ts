import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.css']
})
export class TwoWayDatabindingComponent implements OnInit {
  data: any = {
    name: '',
    lastName: ''
  };

  constructor() { }

  ngOnInit() {
  }

  saveData() {
    console.log('save your data: ', this.data);
  }

}
