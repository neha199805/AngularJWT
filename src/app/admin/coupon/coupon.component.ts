import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from './Coupon';
import { CouponService } from './couponService';
 
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class AdminCouponComponent implements OnInit {
coupon!:Coupon;
sub!:any;
id:number=0
  constructor(private _ActivatedRoute:ActivatedRoute,private _router:Router,private _service:CouponService) { }
 
  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    
    this._service.getCouponById(this.id).subscribe(
      (data)=>{console.log(data);this.coupon=data},
      (err)=>console.log(err)
    );
    console.log(this.coupon)
    }
      onBack():void{
        this._router.navigate(['admin/coupan'])
      }
 
  }