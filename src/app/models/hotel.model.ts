import { Chambre } from "./chambre.model";

export class Hotel {
    constructor(
        public id: number,
        public name: string,
        public location: string,
        public description: string,
        public chambres: Chambre[],
        public img?: string
    ) {}
}