import {Component,OnInit} from '@angular/core';
@Component({
    templateUrl:'./myform.component.html'
})
export class MyFormComponent implements OnInit{
    mytext:string;
    constructor(){
        console.log('Constructor');
        function x(){
            console.log('x')
        }
        x();
    }
    //OnInit
    
    ngOnInit(){
        console.log('Init');
    }
    ngOnChanges(){
        console.log('Change');
    }
    ngOnDestroy(){
        console.log('Destroy');
    }
}