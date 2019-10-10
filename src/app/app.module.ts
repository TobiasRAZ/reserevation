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
import { NoFilterComponent } from './no-filter/no-filter.component';
import { ReservationService } from './services/reservation.service';

const appRoutes: Routes = [
  { path: '', component: NoFilterComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: ChambreListComponent },
  { path: 'admin/new-hotel', component: NewHotelComponent },
  { path: 'reservation/success/:id', component: ReservationSuccessComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ChambreListComponent,
    ReservationComponent,
    ReservationFormComponent,
    NewHotelComponent,
    ReservationSuccessComponent,
    NoFilterComponent
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
    ReservationService
    //MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
