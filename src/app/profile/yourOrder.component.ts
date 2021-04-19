import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../cart/Cart";
import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";
import { CustomerService } from "../service/customer.service";

@Component({
    templateUrl:'./yourOrder.component.html'
})

export class YourOrderListComponent implements OnInit{

    customer!:Customer
    email!:any
    orders:Order[]=[];
    cart:Cart[]=[];

    constructor(private router:Router,private service:CustomerService){}

    ngOnInit():void{

        this.email= sessionStorage.getItem('email')

        this.service.getCustomerByMail(this.email).subscribe(
            (data) => {this.customer = data;},
            (err) => console.log(err)
        )

    }
}