import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/pizza/Pizza';
import { PizzaService } from 'src/app/pizza/pizza.service';

@Component({
  selector: 'app-pizza-byid',
  templateUrl: './pizza-byid.component.html',
  styleUrls: ['./pizza-byid.component.css']
})
export class PizzaByidComponent implements OnInit {

  id:number=0
  pizza!:Pizza
  constructor(private _ActivatedRoute:ActivatedRoute,private _router:Router,private _service:PizzaService) { }
 
  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    this._service.getPizzaById(this.id).subscribe(
      (data)=>{console.log(data);
        this.pizza=data},
      (err)=>console.log(err)
    );
    }
      onBack():void{
        this._router.navigate(['pizzas'])
      }

}
