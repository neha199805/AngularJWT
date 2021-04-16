import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminLoginComponent } from './login/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminLogoutComponent } from './logout/adminlogout.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { AuthGaurdService1 } from './service/auth-guard1.service';

const routes: Routes = [
  {path:'home',component:CustomerComponent,canActivate:[AuthGaurdService]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]},
  {path:'admin',component:AdminComponent,canActivate:[AuthGaurdService1]},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/logout',component:AdminLogoutComponent,canActivate:[AuthGaurdService1]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
