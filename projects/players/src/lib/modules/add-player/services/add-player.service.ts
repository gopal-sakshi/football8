import { Injectable } from "@angular/core";

@Injectable()
export class AddPlayerService {
    
    constructor() {}

    addPlayer(payload) {
        console.log(`player added `,payload);
    }
}