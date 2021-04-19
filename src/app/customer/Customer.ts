import { Order } from "../order/Order";

export interface Customer{
    id:number;
    name:string;
    email:string;
    password:string;
    address:string;
    orders:Order[];
    mobileNumber:string;
}