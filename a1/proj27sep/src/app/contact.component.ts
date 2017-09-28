import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from './contact.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
//import 'rxjs/add/operator/toPromise';
@Component({
    templateUrl: './contact.component.html',
    providers: [ContactService]
})
export class ContactComponent {
    contact = {};
    constructor(private route: ActivatedRoute, private contactService: ContactService) {

        /*
        this.route.params.subscribe(x=>{
            
            this.contactService.getParticularContact(x.contact_id).subscribe(y=>{
                console.log(y.json())
            })
        })*/
        /*
        this.route.params.switchMap(p=>this.contactService.getParticularContact(p.contact_id)).subscribe(p=>{
            console.log(p.json())
        })
        */


        /*
        x=>x.json().contact
        x=>{
            return x.json().contact;
        }
        */
        this.route.params.switchMap(p => this.contactService.getParticularContact(p.contact_id))
            .map(x => x.json()).filter(x => {
                console.log('Data is being filtered')
                if (x.status == false) {
                    alert('Contact Not found')
                }
                return x.status == true
            }).delay(5000).map(x => x.contact).subscribe(p => {
                console.log(p);
                this.contact = p;
            })
    }
}