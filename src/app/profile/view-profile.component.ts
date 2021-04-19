import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Customer } from "../customer/Customer";
import { CustomerService } from "../service/customer.service";

@Component({
    templateUrl:'./view-profile.component.html'
})

export class ViewProfileComponent implements OnInit{

    customer!:Customer;

    email!:any;

    

    constructor(private service:CustomerService,private http: HttpClient,private router:Router){}

    ngOnInit():void{

        this.email = sessionStorage.getItem('email');

      this.service.getCustomerByMail(this.email).subscribe(
            (data)=> {console.log(data);
                this.customer=data},
            (err)=>console.log(err))
    





        console.log(this.email)

        console.log(this.customer)

    }

    editCustomer(customer:Customer){
        this.router.navigate(['edit-profile/',customer.id])
    }

    
    

}