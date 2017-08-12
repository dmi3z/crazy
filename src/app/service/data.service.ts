import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Product} from'./product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
    private url="http://zhitnikov.somee.com/api/default";

    constructor(private http:Http){
    }

   

    getData():Observable<Product[]>{
         console.log("Enter in data service!");
        return this.http.get(this.url).map((resp:Response)=> {
            let productList =resp.json();
            let products:Product[]=[];
            //console.log(productList);
           // for(let elem of productList){
           //     products.push({id:elem.Id,name:elem.Name,price:elem.Price});
           // }
            
            return products;
        });
    }

}