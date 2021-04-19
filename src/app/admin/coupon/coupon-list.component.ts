import { Component, OnInit } from '@angular/core';
import { CouponService } from './couponService';
import { Coupon } from './Coupon'
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-coupan-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class AdminCouponListComponent implements OnInit {
  public coupons!:Coupon[] 
 
  private error! : string
  private id:number=0;
  constructor(private service:CouponService,private router:Router) { }
   
    ngOnInit(): void {
       this.service.getAllCoupons().subscribe(
        (data)=>this.coupons = data,
        (err)=>this.error = err
   
      )  
   
    }
    onEdit(coupon:Coupon){this.router.navigate(['admin/edit-coupan/',coupon.id])}
    
    onDelete(coupon:Coupon):void{
       this.service.deleteCouponById(coupon.id)
          .subscribe( data => {
            console.log("coupon deleted")
                 this.coupons = this.coupons.filter(u => u !== coupon);
                })
            };
    
            
    addCoupan(){
      this.router.navigate(['admin/add-coupan'])
   
    }
          
        
      
    
  }
  

