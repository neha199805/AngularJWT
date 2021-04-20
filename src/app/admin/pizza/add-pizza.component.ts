import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/pizza/Pizza';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { PizzaCost } from 'src/app/pizza/pizzaCost';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {
  pizzas!:Pizza;
  // costList!:PizzaCost;
  addForm!:FormGroup;
  id:number=0;
  err!:string
  constructor(private formBuilder: FormBuilder,private router: Router, private service: PizzaService) { }
  
  ngOnInit() {
  
       this.addForm = this.formBuilder.group({
           
            type:['',Validators.required],
            name:['',Validators.required],
            description:['',Validators.required],
            imageUrl:['',Validators.required],
            costList: this.formBuilder.array([])
            
       })
      }
      onSubmit() {
        console.log(this.addForm.value +"from onSubmit of add coupon component")
        this.service.addPizza(this.addForm.value).subscribe(
          (data)=>{this.pizzas=data;
            console.log(data);
            this.router.navigate(['admin/pizzas'])
          },
          err=>console.log(err)
        )
        // this.router.navigate(['admin'])
      }

      get costList() : FormArray{
        return this.addForm.get("costList") as FormArray
      }
 
      costList1() : FormGroup{
         return this.formBuilder.group({
           pizzaSize : '',
           cost: '',
         })
      }

      addCostList(){
        this.costList.push(this.costList1());
      }
}
