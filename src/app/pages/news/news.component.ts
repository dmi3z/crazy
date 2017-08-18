import {Component} from '@angular/core';
import {DataService} from '../../service/data.service';
import {News} from '../../service/news';

@Component({
    moduleId:module.id,
    selector:'news',
    templateUrl:'./news.component.html',
})

export class NewsComponent {

    news:News[] = [];
    selector:string = 'news';

    constructor(private dataService:DataService){  
    }
    ngOnInit(){
        this.dataService.getNews().subscribe(
            data=>this.news =data,
            error => error,
            ()=>this.news = this.news);
    }
    loaderCheck(){
        while(this.news.length<=0){
            return true;
        }
    }
}