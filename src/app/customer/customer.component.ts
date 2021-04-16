import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CustomerService } from "../service/customer.service";
import { Customer } from "./Customer";

@Component({
    templateUrl:'./customer.component.html'
})

export class CustomerComponent implements OnInit,OnDestroy{

    sub!:Subscription;
    customers:Customer[]=[];

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