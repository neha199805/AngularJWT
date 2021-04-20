import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Customer } from "../customer/Customer";
import { CustomerService } from "../service/customer.service";

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.scss']
})

export class RegisterComponent implements OnInit{

    
    customer:Customer={
            id:0,
            name:'',
            email:'',
            address:'',
            password:'',
            orders:[],
            mobileNumber:''
    };

    constructor(private router:Router,private service:CustomerService){}

    ngOnInit(){
        
    }
    addCustomer(Form1: any): void {
        this.service.register(this.customer).subscribe(
            data => {
                console.log(data);
                this.router.navigate(['']);
            }
            
        )
    }

}