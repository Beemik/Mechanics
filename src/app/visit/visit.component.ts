import { Component } from "@angular/core";

@Component({
    selector: 'mech-visit',
    templateUrl: './visit.component.html'
})
export class VisitComponent {
    carBrand: string = 'BMW';
    carModelName: string = '320d';
    carDistance: number = 316500;
    arrivalDate: Date;
    departureDate: Date;
    parts: any[];

    addPart(): void {
        this.parts = [{
            "partId": 1,
            "serviceName": "Wymiana klocków",
            "partPrice": 150,
            "servicePrice": 200
        }];
    }
    deletePart(): void {
        this.parts.pop();
    }
}