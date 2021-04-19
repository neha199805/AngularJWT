import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "../customer/Customer";
import { CustomerService } from "../service/customer.service";
import { first } from "rxjs/operators";

@Component({
    templateUrl: './edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {

    id!: number;
    email!: any;
    customer!: Customer;
    editForm!: FormGroup;

    constructor(private router: ActivatedRoute, private service: CustomerService, private route: Router, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.email = sessionStorage.getItem('email');
        this.id = Number(this.router.snapshot.paramMap.get("id"));
        this.service.getCustomerByMail(this.email).subscribe(
            (data) => {
                console.log(data);
                this.customer = data;
                this.editForm = this.formBuilder.group({
                    id: this.customer.id,
                    name: this.customer.name,
                    mobileNumber: this.customer.mobileNumber,
                    email: this.customer.email,
                    address: this.customer.address,
                    password:this.customer.password

                });
            },
            (err) => console.log(err)
        );

    }
    onSubmit() {
        this.service.updateCustomerById(this.editForm.value, this.editForm.value.id)
            .pipe(first())
            .subscribe(data => {
                this.customer = data;
                this.route.navigate(['view-profile']);
            },
                (err) => { console.log(err) }
            )

    }
}