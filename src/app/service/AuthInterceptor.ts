import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import { AuthenticationService } from './authentication.service';






@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: CustomerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {



    if (sessionStorage.getItem('email') && sessionStorage.getItem('token')) {

      req = req.clone({

        setHeaders: {

          Authorization : sessionStorage.getItem('token')

        }

      })

    }



    return next.handle(req);




  }
}
