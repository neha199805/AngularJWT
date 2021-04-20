import { Component } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";

@Component({
    selector:'admin-nav',
    templateUrl:'./admin-navbar.component.html'
})

export class AdminNavBarComponent{
    constructor(public loginService:AuthenticationService){}
}