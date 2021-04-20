import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html'
})

export class NavBarComponent implements OnInit{

    constructor(public loginService:AuthenticationService){}
    ngOnInit(): void {
        
    }



    
}