import { PizzaCost } from "./pizzaCost";

export class Pizza{

    id:number = 0;
    type:string = '';
    name:string = '';
    description:string='';
    imageUrl:string='';
    costList!:PizzaCost[];
}