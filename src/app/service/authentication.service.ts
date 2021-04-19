import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


export class User {
  email!: string;
  password!: string;
  name!:string;
  constructor(public status: string,) { }
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  user!: User;
  private baseUrl = 'http://localhost:8080/onlinepizza'

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<any> {

    console.log('in authentication service authenticate method', email)

    return this.http.post<any>(`${this.baseUrl}/authenticate`, { email, password })

      .pipe(map(

        userData => {

          sessionStorage.setItem('email', email);

          let tokenStr = 'Bearer ' + userData.token;

          sessionStorage.setItem('token', tokenStr);

          return userData;

        }

      ));
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(user);
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }

}