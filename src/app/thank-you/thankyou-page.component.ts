import { Component, OnInit } from "@angular/core";
import { OrderService } from "../service/order.service";
 
@Component({
    selector: 'thank-you-page',
    templateUrl: './thankyou-page.component.html'
})
export class ThankYouPageComponent implements OnInit{
 
    orderPlaced:any
    constructor(private orderService : OrderService){}
    ngOnInit(){
        this.orderPlaced =this.orderService.getReturnOrder()
        console.log(this.orderPlaced)
    }
}