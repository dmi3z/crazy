import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Table} from'./table';
import {News} from './news';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{

    private url="http://zhitnikov.somee.com/api/";

    constructor(private http:Http){
    }   

    getData(selector):Observable<Table[]>{
        //console.log("Enter in data service!");
        if(selector!='contacts'){
            return this.http.get(this.url.concat(selector)).map((resp:Response)=> {
                let tableList =resp.json();
                let table:Table[]=[];
                //console.log(productList);
               // for(let elem of productList){
               //     products.push({id:elem.Id,name:elem.Name,price:elem.Price});
               // }                
                return table;
            });
        }        
    }

    getNews():Observable<News[]>{
                
            return this.http.get(this.url.concat('news')).map((resp:Response)=> {
                let newsList =resp.json();
                let news:News[]=[];
                //console.log(productList);
               // for(let elem of productList){
               //     products.push({id:elem.Id,name:elem.Name,price:elem.Price});
               // }                
                return news;
            });
        }

}