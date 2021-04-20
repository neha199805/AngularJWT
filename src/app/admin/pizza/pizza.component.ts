import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/pizza/Pizza';
import { PizzaService } from 'src/app/pizza/pizza.service';
 
 
@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class AdminPizzaListComponent implements OnInit {
   pizza!:Pizza[]
 
  error! : string
  id:number=0;
  constructor(private service:PizzaService,private router:Router) { }
   
    ngOnInit(): void {
       this.service.getAllPizzas().subscribe(
        (data)=>{
          console.log(data);
          this.pizza = data;
        },
        (err)=>this.error = err
   
      )  
   
    }
    onEdit(pizza:Pizza){this.router.navigate(['admin/edit-pizza/',pizza.id])}
    
    onDelete(pizza:Pizza):void{
       this.service.deletePizzaById(pizza.id)
          .subscribe( data => {
            console.log("pizza deleted")
                 this.pizza = this.pizza.filter(u => u !== pizza);
                })
            };
    
            
    addPizza(){
      this.router.navigate(['admin/add-pizza'])
   
    }    
    
  }