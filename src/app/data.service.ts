import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addHotel(data) {
    return this.http.post('https://booking-da776.firebaseio.com/hotels.json', data);
  }

  getHotels() {
    return this.http.get('https://booking-da776.firebaseio.com/hotels.json');
  }
}
