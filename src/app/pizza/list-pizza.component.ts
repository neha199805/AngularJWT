import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Pizza } from './Pizza';
import { PizzaService } from './pizza.service';
import { PizzaCost } from './pizzaCost';
import { Subscription } from 'rxjs';
import { Cart } from '../cart/cart';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.css']
})
export class ListPizzaComponent implements OnInit{

  selectedLevel!:any
  quantity=0
  pizzaSize:string=''
  cost!:number;
  totalCost:number=0;
  cartTotal = 0
  id!:string
  cartItems:Cart[] = []
  constructor(private service : PizzaService, private cartService: CartService,private router: Router) { }
   sub!: Subscription;
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  //   throw new Error('Method not implemented.');
  // }
  
  pizzaList !: Pizza[];
  costList !: PizzaCost;

  ngOnInit(): void {
      
      this.sub = this.service.getAllPizzas().subscribe(
      (data)=>{
        console.log(data);
        this.pizzaList = data;
      }
    )
  }
  
//   calculateCost(){
//     this.cartTotal = 0
//     this.cartItems.forEach(item => {
//       this.cartTotal += (item.quantity * this.cost)
//       console.log("cart total :" +this.cartTotal)
//     })
//     console.log(this.cost)
//     this.totalCost+=this.cost
//     console.log(this.totalCost)
//   }
// }

addToCart(pizzaId : number ,quantity:number){
  console.log(pizzaId)
  this.cartItems.push({
    pizzaId : pizzaId,
    pizzaSize : this.pizzaSize,
    quantity : this.quantity  
  })
  console.log(this.cartItems)
  this.cartService.addToCart(this.cartItems)

}
selected(){
  console.log(this.selectedLevel)
}

sizeClicked(pizzaSize:string,cost:number){
  console.log(pizzaSize, cost);
  this.pizzaSize= pizzaSize;
  this.cost = cost;
  
}


}

