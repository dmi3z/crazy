import {Component} from '@angular/core';
import {Image} from './images';

@Component({
    moduleId:module.id,
    selector:'index',
    templateUrl:'./index.component.html',
    styleUrls:['./index.component.css']
})

export class IndexComponent {
    fullPath:string;
    i:number=0;
   public images:Image[]=[
       {path:'/assets/pictures/DSC_0637.JPG',status:'slider show'},
       {path:'/assets/pictures/DSC_0646.JPG',status:'slider'},
       {path:'/assets/pictures/DSC_0647.JPG',status:'slider'},
       {path:'/assets/pictures/DSC_0654.JPG',status:'slider'},
       {path:'/assets/pictures/DSC_0684.JPG',status:'slider'},
       {path:'/assets/pictures/DSC_0705.JPG',status:'slider'},
       {path:'/assets/pictures/DSC_0722.JPG',status:'slider'},
       {path:'/assets/pictures/DSC_0735.JPG',status:'slider'},
       {path:'/assets/pictures/DSC_0801.JPG',status:'slider'}     
        ];

constructor(){
   // setInterval(()=>{this.changeImage();},2000);
}

ngOnInit(){
   
}

changeImage(){
    
    this.images[this.i].status = "slider";
    this.i=(this.i+1)%this.images.length;
    this.images[this.i].status = "slider show";
}

}