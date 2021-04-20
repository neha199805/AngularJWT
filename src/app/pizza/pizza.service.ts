import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { Pizza } from './Pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  
public baseUrl:string = "http://localhost:8080/onlinepizza"
  constructor(private http:HttpClient) { }
 
  getAllPizzas():Observable<Pizza[]>{
    console.log("Retreiving all the pizzas")
     return  <Observable<Pizza[]>>this.http.get(this.baseUrl + "/pizzas")
    
  }
 
  getPizzaById(id:number):Observable<Pizza>{
    console.log("in service class")
    return <Observable<Pizza>>this.http.get(this.baseUrl+"/pizzas/"+id); 
  }

  getPizzaByType(veg:string):Observable<Pizza[]>{
    console.log("in searching pizza by type")
    console.log(veg)
    return <Observable<Pizza[]>>this.http.get(this.baseUrl+"/pizzas/type/"+veg);
  }

  addPizza(pizza:Pizza):Observable<Pizza>{
    return <Observable<Pizza>>this.http.post(this.baseUrl+"/pizzas",pizza);
  }

  updatePizza(pizza:Pizza, id:number):Observable<Pizza>{
    return <Observable<Pizza>>this.http.patch(this.baseUrl+"/pizzas/"+id,pizza);
  }

  deletePizzaById(id:number):Observable<Pizza>{
    console.log("in service class")
    return <Observable<Pizza>>this.http.delete(this.baseUrl+"/pizzas/"+id);
 
  }
}