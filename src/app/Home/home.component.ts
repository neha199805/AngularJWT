import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector:'home-page',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss']

})
export class HomeComponent{


    constructor(private router:Router){}
    
    toVeg(){

        console.log("hello in method")

        this.router.navigate(['pizzas/veg'])

    }

    getNonVeg(){

        this.router.navigate(['pizzas/non-veg'])

    }
}