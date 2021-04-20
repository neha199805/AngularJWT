import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../order/Order";

@Injectable({
    providedIn:'root',
})

export class OrderService{

    returnOrder:any;
    backendUrl:string='http://localhost:8080/onlinepizza/'
    constructor(private http:HttpClient){}


    bookOrder(order : Order):Observable<Order>{
       this.returnOrder=  this.http.post<Order>(this.backendUrl+'orders',order);
       return this.returnOrder
    }

    getAllOrders():Observable<Order[]>{
        return  <Observable<Order[]>>this.http.get(this.backendUrl + "admin/orders")
       
    }
    getReturnOrder(){
        return this.returnOrder
    }
 
    setReturnOrder(returnOrder:any){
        this.returnOrder = returnOrder
    }


}
