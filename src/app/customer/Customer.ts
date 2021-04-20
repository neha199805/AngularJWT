import { JsonClassType, JsonManagedReference, JsonProperty } from "jackson-js";
import { Order } from "../order/Order";


export class Customer{
    id:number=0;
    name:string='';
    email:string='';
    password:string='';
    address:string='';

    @JsonProperty()
    //@JsonClassType({type: () => [Array, [Order]]})
    @JsonManagedReference()
    orders:Order[]=[];
    mobileNumber:string='';
}