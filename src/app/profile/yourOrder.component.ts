import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../cart/cart";
import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";
import { PizzaService } from "../pizza/pizza.service";
import { CartService } from "../service/cart.service";
import { CustomerService } from "../service/customer.service";

@Component({
    templateUrl:'./yourOrder.component.html'
})

export class YourOrderListComponent implements OnInit{

    pizzaId!:number;
    customer!:Customer
    email!:any
    orders:Order[]=[];
    cart:Cart[]=[];

    constructor(private router:Router,private service:CustomerService,private pizzaService:PizzaService,private cartService :CartService){}

    ngOnInit():void{

        this.email= sessionStorage.getItem('email')

        this.service.getCustomerByMail(this.email).subscribe(
            (data) => {this.customer = data; console.log(data);},
            (err) => console.log(err)
        )



    }
}