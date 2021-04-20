import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Cart } from "../cart/cart";
import { Order } from "../order/Order";
import { CustomerService } from "../service/customer.service";
import { Customer } from "./Customer";

@Component({
    templateUrl:'./customer.component.html'
})

export class CustomerComponent implements OnInit,OnDestroy{

    sub!:Subscription;
    customers:Customer[]=[];
    orders:Order[]=[];
    cart:Cart[]=[];

    constructor(private custService:CustomerService){}

    ngOnInit():void{
        this.sub=this.custService.getCustomer().subscribe({
          next: customers =>{
              this.customers=customers;
          }
        });
    }
    ngOnDestroy(){
       this.sub.unsubscribe(); 
    }

}