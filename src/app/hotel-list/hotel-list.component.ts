import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { Subscription } from 'rxjs';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[]
  hotelSubscription: Subscription
  searchText = "Lag"

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit() {
    this.hotelSubscription = this.hotelService.hotelSubject.subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels
      }
    )
    this.hotelService.emitHotels()
    this.hotels.forEach((hotel, id) => {
      hotel.img = "https://picsum.photos/id/58"+ id + "/200/300"
    })
  }

  getDetail(i: number) {
    const path = '/hotels/' + i
    this.router.navigate([path])
  }

}
