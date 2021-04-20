import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/pizza/Pizza';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { PizzaCost } from 'src/app/pizza/pizzaCost';

@Component({
  selector: 'app-update-pizza',
  templateUrl: './update-pizza.component.html',
  styleUrls: ['./update-pizza.component.css']
})
export class UpdatePizzaComponent implements OnInit {

  pizza!:Pizza;
  editForm!:FormGroup
  id:number=0;
  constructor(private _ActivatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private service:PizzaService) { }

  ngOnInit(): void {

    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    this.service.getPizzaById(this.id).subscribe(
      (data)=>{console.log(data);this.pizza=data;
        this.editForm = this.formBuilder.group({
          id: this.pizza.id,
          name: this.pizza.name,
          type: this.pizza.type,
          description:this.pizza.description,
          imageUrl:this.pizza.imageUrl,
          costList : this.formBuilder.array([])
        });
      console.log("edit form")
      },

      (err)=>console.log(err)
    );        
  }

  onSubmit(){
    console.log(this.editForm.value +"from onSubmit of add pizza component")
        this.service.updatePizza(this.editForm.value,this.id).subscribe(
          (data)=>{this.pizza=data,
            //json.stringify
          console.log(data);
          },
          err=>console.log(err)
        )
        this.router.navigate(['admin'])

  }

  get costList() : FormArray{
    return this.editForm.get("costList") as FormArray
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
