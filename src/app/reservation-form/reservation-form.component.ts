import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  constructor(private router: Router, private reservationService: ReservationService) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    const reservation = {
      user: form.value
    }
    const id = this.reservationService.addReservation(reservation)
    this.router.navigate(['/reservation/success/'+id])
  }

}
