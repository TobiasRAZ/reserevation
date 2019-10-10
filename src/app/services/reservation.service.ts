export class ReservationService {

    arrival_date = 0
    departure_date = 0

    reservations: any [] = []
    SelectedChambre = 0

    setReservation(departure_date, arrival_date) {
        this.departure_date = departure_date
        this.arrival_date = arrival_date
    }

    nuitees(departure_date = this.departure_date, arrival_date = this.arrival_date) {
        return new Date(departure_date).getDate() - new Date(arrival_date).getDate();
    }

    addReservation(reservation) {
        reservation.arrival_date = this.arrival_date
        reservation.departure_date = this.departure_date
        reservation.chambre = this.SelectedChambre
        return this.reservations.push(reservation)
    }
}