import { Injectable } from "@angular/core";
import { Cart } from "../cart/cart";

@Injectable({
    providedIn: 'root'
  })
export class CartService{

  cart!:Cart[]
  addToCart(cart : Cart[]){
    this.cart = cart
  }

  getCartItems(){
    return this.cart
  }

  setCartItems(cart:Cart[]){
    this.cart=cart;
  }
}