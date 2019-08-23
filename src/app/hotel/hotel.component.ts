import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() hotel: {
    hotel: string,
    address: string,
    amount: number,
    description: string,
    picture: string,
    stars: number
  };

  constructor() { }

  ngOnInit() {
  }

}
