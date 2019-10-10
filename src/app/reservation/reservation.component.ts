import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  arrival_date
  departure_date

  constructor(private router: Router, private reservationSerice: ReservationService) { }

  ngOnInit() {
  }

  nuitees() {
    return this.reservationSerice.nuitees(this.departure_date, this.arrival_date)
    /*if (this.departure_date && this.arrival_date)
      return new Date(this.departure_date).getDate() - new Date(this.arrival_date).getDate();
    else
      return 0*/
  }

  filter() {
    this.reservationSerice.setReservation(this.departure_date, this.arrival_date)
    this.router.navigate(['/hotels'])
  }

}
