import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './Home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CustomerService } from './service/customer.service';
import { AuthInterceptor } from './service/AuthInterceptor';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './login/adminlogin.component';
import { AdminLogoutComponent } from './logout/adminlogout.component';
import { CouponListComponent } from './coupon/coupon-list1.component';
import { AdminCouponListComponent } from './admin/coupon/coupon-list.component';
import { AdminEditCouponComponent } from './admin/coupon/edit-coupon.component';
import { AdminAddCouponComponent } from './admin/coupon/add-coupon.component';
import { EditProfileComponent } from './profile/edit-profile.component';
import { ViewProfileComponent } from './profile/view-profile.component';
import { YourOrderListComponent } from './profile/yourOrder.component';
import { AddPizzaComponent } from './admin/pizza/add-pizza.component';
import { UpdatePizzaComponent } from './admin/pizza/update-pizza.component';
import { AdminPizzaListComponent } from './admin/pizza/pizza.component';
import { CartComponent } from './cart/cart.component';
import { PizzaByidComponent } from './admin/pizza/pizza-byid.component';
import { ListPizzaComponent } from './pizza/list-pizza.component';
import { OrderList1Component } from './admin/order/order-list1.component';
import { CustomerList1Component } from './admin/customer-list1/customer-list1.component';
import { NavBarComponent } from './navBar/navbar.component';
import { AdminNavBarComponent } from './navBar/admin-navbar.component';
import { PizzaByTypeComponent } from './pizza/list-pizza-type.component';
import { ThankYouPageComponent } from './thank-you/thankyou-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    CouponListComponent,
    AdminCouponListComponent,
    AdminEditCouponComponent,
    AdminAddCouponComponent,
    EditProfileComponent,
    ViewProfileComponent,
    YourOrderListComponent,
    AddPizzaComponent,
    UpdatePizzaComponent,
    AdminPizzaListComponent,
    CartComponent,
    PizzaByidComponent,
    ListPizzaComponent,
    OrderList1Component,
    CustomerList1Component,
    NavBarComponent,
    AdminNavBarComponent,
    PizzaByTypeComponent,
    ThankYouPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService,
    { provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
