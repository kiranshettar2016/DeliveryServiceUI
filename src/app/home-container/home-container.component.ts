import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.sass']
})
export class HomeContainerComponent implements OnInit {

  showOrder = false;
  constructor() { }

  ngOnInit() {
  }

  showOrderComp(event: boolean) {
    this.showOrder = event;
  }

}
