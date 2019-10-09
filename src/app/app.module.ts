import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelService } from './services/hotel.service';
import { Routes, RouterModule } from '@angular/router';
import { ChambreListComponent } from './chambre-list/chambre-list.component';
import { ReservationComponent } from './reservation/reservation.component';
/*import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/

/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/
import { FormsModule } from '@angular/forms';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { NewHotelComponent } from './new-hotel/new-hotel.component';
import { ReservationSuccessComponent } from './reservation-success/reservation-success.component';

const appRoutes: Routes = [
  { path: '', component: HotelListComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: ChambreListComponent },
  { path: 'admin/new-hotel', component: NewHotelComponent },
  { path: 'reservation/success', component: ReservationSuccessComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ChambreListComponent,
    ReservationComponent,
    ReservationFormComponent,
    NewHotelComponent,
    ReservationSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /*NgbModule,*/
    /*MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,*/
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HotelService,
    //MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
