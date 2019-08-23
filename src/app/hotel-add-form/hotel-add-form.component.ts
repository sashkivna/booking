import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-hotel-add-form',
  templateUrl: './hotel-add-form.component.html',
  styleUrls: ['./hotel-add-form.component.css']
})
export class HotelAddFormComponent implements OnInit {
  hotelForm = new FormGroup({
    address: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    hotel: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required),
    stars: new FormControl('', Validators.required)
  });

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addHotel() {
    this.dataService.addHotel(this.hotelForm.value).subscribe(data => console.log(data));
    this.hotelForm.reset();
  }
}
