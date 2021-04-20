import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/order/Order';
import { OrderService } from 'src/app/service/order.service';


@Component({
  selector: 'app-order-list1',
  templateUrl: './order-list1.component.html',
  styleUrls: ['./order-list1.component.css']
})
export class OrderList1Component implements OnInit {
  public orders!:Order[]
   
  private error! : string
  private id:number=0;
  constructor(private service:OrderService,private router:Router) { }
   
    ngOnInit(): void {
       this.service.getAllOrders().subscribe(
        (data)=>{this.orders = data;
        console.log(data);},
        (err)=>this.error = err
   
      )  
   
    }
}