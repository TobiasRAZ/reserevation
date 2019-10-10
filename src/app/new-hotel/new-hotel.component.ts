import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-hotel',
  templateUrl: './new-hotel.component.html',
  styleUrls: ['./new-hotel.component.scss']
})
export class NewHotelComponent implements OnInit {

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value.name
    const location = form.value.location
    const description = form.value.description
    this.hotelService.addHotel(name, location, description, [])
    this.router.navigate(['/hotels'])
  }

}
