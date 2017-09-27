import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from './contact.service';
import 'rxjs/add/operator/switchMap'
@Component({
    template:'',
    providers:[ContactService]
})
export class ContactComponent{
    constructor(private route:ActivatedRoute,private contactService:ContactService){

        /*
        this.route.params.subscribe(x=>{
            
            this.contactService.getParticularContact(x.contact_id).subscribe(y=>{
                console.log(y.json())
            })
        })*/

        this.route.params.switchMap(p=>this.contactService.getParticularContact(p.contact_id)).subscribe(p=>{
            console.log(p.json())
        })
    }
}