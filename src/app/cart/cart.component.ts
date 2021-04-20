import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from '../admin/coupon/Coupon';
import { Customer } from '../customer/Customer';
import { Order } from '../order/Order';
import { TransactionMode } from '../order/TransactionMode';
import { Pizza } from '../pizza/Pizza';
import { AuthenticationService } from '../service/authentication.service';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';
import { OrderService } from '../service/order.service';
import { Cart } from './cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any
  cartItems: Cart[] = []
  cart1!: Array<any>
  customerEmail!: any
  coupon!: Coupon
  transactionMode!: TransactionMode
  customerId !: number
  constructor(private service: CartService, private orderService: OrderService, private customerService: CustomerService, private router: Router, private loginService: AuthenticationService) { }

  customer!: Customer



  ngOnInit(): void {
    this.customerEmail = sessionStorage.getItem('email')
    console.log("retreiving customer details")
    console.log(this.customerEmail)
    this.customerService.getCustomerByMail(this.customerEmail).subscribe(
      (data) => {
        console.log(data)
        this.customerId = data.id;
        this.customer = data;
        //console.log("data in order " +this.customerId)
      },
      (err) => console.log(err)
    )

    this.cartItems = this.service.getCartItems()

    console.log("in order component ")
    console.log(this.cartItems)
    for (let cart of this.cartItems) {
      console.log(cart.pizzaId)
    }
    console.log("cart is displayed")

    this.cart = this.service.getCartItems();

  }
  onSubmit() {
    if (this.loginService.isUserLoggedIn()) {
      let order: Order = {
        id: 0,
        customer: this.customer,
        transactionMode: this.transactionMode,
        cart: this.cartItems,
        coupan: this.coupon
      }
      console.log(this.transactionMode)
      console.log(order)

      this.orderService.bookOrder(order).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(['thank-you'])
        }
      )
      this.cartItems = [];
      this.service.setCartItems(this.cartItems);

    }
    else {
      this.router.navigate(['login'])
    }
  }


}
