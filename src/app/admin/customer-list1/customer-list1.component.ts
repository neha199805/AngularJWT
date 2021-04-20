import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list1',
  templateUrl: './customer-list1.component.html',
  styleUrls: ['./customer-list1.component.css']
})
export class CustomerList1Component implements OnInit,OnDestroy {

  sub!:Subscription;
    customers:Customer[]=[];
  
  

    constructor(private custService:CustomerService, private _router:Router){}

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
    onBack(){
      this._router.navigate(['admin'])
    }

  }