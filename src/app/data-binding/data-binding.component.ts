import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  private urlImage: string = null;

  getUrlImage() {
    return 'https://i1.wp.com/gamelogia.com.br/wp-content/uploads/2016/02/csgo.png?resize=940%2C400&ssl=1';
  }

  getMyName() {
    return 'Hellow Lucas';
  }

  constructor() { }

  ngOnInit() {
  }

}
