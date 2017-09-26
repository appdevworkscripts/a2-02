import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay'
@Component({
    templateUrl:'./profile.component.html',
    selector:'app-profile'
})
export class ProfileComponent{
    mynum:number;
    result:number;
    constructor(private http:Http){

    }
    calculateSquare(){
        /*
        this.square(this.mynum).then(res=>{
            this.result=res;
        },rej=>{
            this.result=rej;
        });
        */
        this.oSquare(this.mynum).subscribe(o=>{
            this.result=o;
        });
    }
    square(num:number):Promise<number>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(num<0){
                    reject('-ve number not allowed');
                }else{
                    resolve(num*num);
                }
            },4000);
        });
    }

    oSquare(num:number):Observable<number>{
        return Observable.of(num*num).delay(4000);
    }
    callApi(){
        this.http.get('http://api.fixer.io/latest').subscribe(o=>{
            console.log(o.json())
        });
    }
}