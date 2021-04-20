import { Pizza } from "../pizza/Pizza";

export interface Cart{
    //cartId:number=0;
    pizzaId:number;
    pizzaSize:string;
    quantity:number;
}