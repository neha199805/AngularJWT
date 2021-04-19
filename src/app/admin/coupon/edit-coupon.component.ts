import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Coupon } from "./Coupon";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { CouponService } from "./couponService";

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.css']
})
export class AdminEditCouponComponent implements OnInit {
  coupon!: Coupon;
  editForm!: FormGroup;
  id: number = 0;

  constructor(private _ActivatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private service: CouponService) { }

  ngOnInit() {

    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id + " " + this._ActivatedRoute)
    this.service.getCouponById(this.id).subscribe(
      (data) => {
        console.log(data); this.coupon = data;
        this.editForm = this.formBuilder.group({
          id: this.coupon.id,
          name: this.coupon.name,
          type: this.coupon.type,
          description: this.coupon.description,
          priceDiscount: this.coupon.priceDiscount

        });
      },
      (err) => console.log(err)
    );



  }
  onSubmit() {
    console.log(this.editForm.value + "from onSubmit of edit coupon component")
    this.service.updateCoupon(this.editForm.value, this.editForm.value.id)
      .pipe(first())
      .subscribe(
        data => { this.coupon = data; this.router.navigate(['admin/coupan']) },
        (err) => { console.log(err) }

      )
  }
}
