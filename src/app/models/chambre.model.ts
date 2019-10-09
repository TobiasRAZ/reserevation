export class Chambre {
    constructor(
        public price: number,
        public adulte: number = 0,
        public enfant: number = 0,
        public grandLit: number = 0,
        public litSimple: number = 0,
        public litSuperposé: number = 0,
    ) {
        
    }

    person() {
        return this.adulte + this.enfant
    }
}