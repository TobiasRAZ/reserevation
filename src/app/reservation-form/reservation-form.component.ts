import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    this.router.navigate(['/reservation/success'])
  }

}
