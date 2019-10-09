import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { HotelService } from '../services/hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.scss']
})
export class ChambreListComponent implements OnInit {

  formDisplay: boolean = false
  hotel: Hotel
  check: number

  constructor(private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.hotel = this.hotelService.getHotelById(+id)
  }

  toogleForm() {
    this.formDisplay = !this.formDisplay
    if (!this.formDisplay) {
      this.check = null
    }
  }

  reserver(i: number) {
    this.check = i
    this.toogleForm()
  }

}
