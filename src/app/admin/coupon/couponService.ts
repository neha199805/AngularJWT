import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import {Coupon} from './Coupon'
@Injectable({
  providedIn: 'root'
})
export class CouponService {
public baseUrl:string = "http://localhost:8080/onlinepizza"
  constructor(private http:HttpClient) { }
 
  getAllCoupons():Observable<Coupon[]>{
     return  <Observable<Coupon[]>>this.http.get(this.baseUrl + "/coupans")
    
  }
 
  getCouponById(id:number):Observable<Coupon>{
    console.log("in service class")
    return <Observable<Coupon>>this.http.get(this.baseUrl+"/coupans/"+id);
 
  }
 
  deleteCouponById(id:number):Observable<Coupon>{
    console.log("in service class")
    return <Observable<Coupon>>this.http.delete(this.baseUrl+"/coupans/"+id);
 
  }
  updateCoupon(coupan:Coupon,id:number):Observable<Coupon>{
    return <Observable<Coupon>>this.http.put(this.baseUrl+"/coupans/"+id,coupan);
  }
 
  addCoupon(coupon:Coupon):Observable<Coupon>{
    return <Observable<Coupon>>this.http.post(this.baseUrl+"/coupans",coupon);
  }
}