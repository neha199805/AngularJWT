import { JsonBackReference } from "jackson-js";
import { Coupon } from "../admin/coupon/Coupon";
import { Cart } from "../cart/cart";
import { Customer } from "../customer/Customer";

export class Order{
 
    id:number=0;
    @JsonBackReference()
    customer!:Customer;
    transactionMode:string='';
    cart:Cart[]=[];
    coupan !: Coupon;
 
}