import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  hotels$;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.hotels$ = this.dataService.getHotels().pipe(
      map(data => {
        const hotelsArr = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            hotelsArr.push({...data[key], id: key});
          }
        }
        return hotelsArr;
      })
    );
  }

}
