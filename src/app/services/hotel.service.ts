import { Hotel } from "../models/hotel.model";
import { Subject } from "rxjs";
import { Chambre } from "../models/chambre.model";

export class HotelService {
    private hotels: any[] = [
        new Hotel(0,"Le Lagon", "foulpointe", "Lorem ipsum", [ new Chambre(200, 2, 0), new Chambre(400, 2, 1) ]),
        new Hotel(1,"Manda Beach", "foulpointe", "Lorem ipsum", [ new Chambre(500, 2, 1), new Chambre(100, 4, 4), new Chambre(800, 5, 0) ])
    ]
    hotelSubject = new Subject<Hotel[]>()

    addHotel(name: string, location: string, 
        description: string, chambres: Chambre[]) {
        const hotelObject : Hotel = {
            id:0,
            name: '',
            description: '',
            location: '',
            chambres: []
        };
        hotelObject.name = name;
        hotelObject.description = description
        hotelObject.location = location
        hotelObject.id = this.hotels[(this.hotels.length - 1)].id + 1
        this.hotels.push(hotelObject)
        this.emitHotels()
    }

    emitHotels() {
        this.hotelSubject.next(this.hotels.slice())
    }

    getHotelById(id: number) {
        const hotel = this.hotels.find(
            (hotel) => {
                return hotel.id === id
            }
        )
        return hotel
    }
}