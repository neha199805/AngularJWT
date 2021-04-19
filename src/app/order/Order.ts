import { Coupon } from "../admin/coupon/Coupon";
import { Cart } from "../cart/Cart";
import { Customer } from "../customer/Customer";

export interface Order{
 
    id:number;
    type:string;
    description:string;
    customer:Customer;
    transactionMode:string;
    localDate:Date;
    cart:Cart[];
    coupan : Coupon;
    totalCost:number;
 
}