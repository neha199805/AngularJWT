import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminAddCouponComponent } from './admin/coupon/add-coupon.component';
import { AdminCouponListComponent } from './admin/coupon/coupon-list.component';
import { AdminCouponComponent } from './admin/coupon/coupon.component';
import { AdminEditCouponComponent } from './admin/coupon/edit-coupon.component';
import { CustomerList1Component } from './admin/customer-list1/customer-list1.component';
import { OrderList1Component } from './admin/order/order-list1.component';
import { AddPizzaComponent } from './admin/pizza/add-pizza.component';
import { PizzaByidComponent } from './admin/pizza/pizza-byid.component';
import { AdminPizzaListComponent } from './admin/pizza/pizza.component';
import { UpdatePizzaComponent } from './admin/pizza/update-pizza.component';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './Home/home.component';
import { AdminLoginComponent } from './login/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminLogoutComponent } from './logout/adminlogout.component';
import { LogoutComponent } from './logout/logout.component';

import { PizzaByTypeComponent } from './pizza/list-pizza-type.component';
import { ListPizzaComponent } from './pizza/list-pizza.component';
import { EditProfileComponent } from './profile/edit-profile.component';
import {  ViewProfileComponent } from './profile/view-profile.component';
import { YourOrderListComponent } from './profile/yourOrder.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { AuthGaurdService1 } from './service/auth-guard1.service';
import { ThankYouPageComponent } from './thank-you/thankyou-page.component';

const routes: Routes = [
  {path:'home',component:CustomerComponent,canActivate:[AuthGaurdService]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]},
  {path:'admin',component:AdminComponent,canActivate:[AuthGaurdService1]},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/logout',component:AdminLogoutComponent,canActivate:[AuthGaurdService1]},

  {path:'admin/coupan',component:AdminCouponListComponent,canActivate:[AuthGaurdService1]},
  {path:'admin/add-coupan',component:AdminAddCouponComponent,canActivate:[AuthGaurdService1]},
  {path:'admin/edit-coupan/:id',component:AdminEditCouponComponent,canActivate:[AuthGaurdService1]},
  {path:'admin/coupans/:id',component:AdminCouponComponent,canActivate:[AuthGaurdService1]},
  {path:'view-profile',component:ViewProfileComponent,canActivate:[AuthGaurdService]},
  {path:'edit-profile/:id',component:EditProfileComponent,canActivate:[AuthGaurdService]},
  {path:'my-orders',component:YourOrderListComponent,canActivate:[AuthGaurdService]},
  { path: 'admin/add-pizza',component:AddPizzaComponent,canActivate:[AuthGaurdService1]},
  { path: 'admin/edit-pizza/:id',component:UpdatePizzaComponent,canActivate:[AuthGaurdService1]},
  { path:'admin/pizzas',component:AdminPizzaListComponent,canActivate:[AuthGaurdService1]},
  { path : 'pizzas/:id',component: PizzaByidComponent},
  { path : 'cart', component : CartComponent},
  {path:'pizzas',component:ListPizzaComponent},
  {path:'admin/orders',component:OrderList1Component},
  {path:'admin/customers',component:CustomerList1Component},
  {path:'',component:HomeComponent},
  {path:'pizzas/type/veg',component:PizzaByTypeComponent},
  {path:'thank-you',component:ThankYouPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
