import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from './Coupon';
import { CouponService } from './couponService';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AdminAddCouponComponent implements OnInit {
  coupon!:Coupon;
  addForm!:FormGroup;
  id:number=0;
  id1:number=0;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private service: CouponService) { }
  
  ngOnInit() {
  
       this.addForm = this.formBuilder.group({
           
            name:['',Validators.required],
            type:['',Validators.required],
            description:['',Validators.required],
            priceDiscount:['',Validators.required]
            
       })
      }
      onSubmit() {
        console.log(this.addForm.value +"from onSubmit of add coupon component")
        this.service.addCoupon(this.addForm.value).subscribe(
          data=>{this.coupon=data;
          },
          err=>console.log(err)
        )
        
      }}