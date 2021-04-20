import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pizza-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  gotocoupon(){
    this.router.navigate(['admin/coupan'])

  }

  gotoPizza(){
    this.router.navigate(['admin/pizzas'])
  }

  goToOrder(){
    this.router.navigate(['admin/orders'])
  }
  goToCustomer()
  {
    this.router.navigate(['admin/customers'])
  }
}
