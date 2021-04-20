import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Cart } from "../cart/cart";
import { CartService } from "../service/cart.service";
import { Pizza } from "./Pizza";
import { PizzaService } from "./pizza.service";
import { PizzaCost } from "./pizzaCost";

@Component({
    selector:'type-list',
    templateUrl:'./list-pizza-type.component.html'
})

export class PizzaByTypeComponent implements OnInit{

    selectedLevel!:any
  quantity=0
  pizzaSize:string=''
  cost!:number;
  totalCost:number=0;
  cartTotal = 0
  id!:string
  cartItems:Cart[] = []
    vegPizza!:Pizza[]
    costList!:PizzaCost[]
    constructor(private route:ActivatedRoute,private service:PizzaService,private cartService: CartService){}
    ngOnInit(): void {
        this.service.getPizzaByType('veg').subscribe(
            (data) => this.vegPizza=data,
            (err) => console.log(err)
        )
    }
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