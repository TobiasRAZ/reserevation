import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-success',
  templateUrl: './reservation-success.component.html',
  styleUrls: ['./reservation-success.component.scss']
})
export class ReservationSuccessComponent implements OnInit {

  reservation
  constructor(private route: ActivatedRoute, private reservationService: ReservationService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.reservation = this.reservationService.reservations[id-1]
    console.log(this.reservation)
  }

}
