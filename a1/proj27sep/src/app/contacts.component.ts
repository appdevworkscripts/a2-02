import {Component} from '@angular/core';
import {ContactService} from './contact.service';
@Component({
    templateUrl:'./contacts.component.html',
    providers:[ContactService]
})
export class ContactsComponent{
    contacts;
    constructor(private contactService:ContactService){
       this.contactService.getAllContacts().subscribe(x=>{
           this.contacts=x.json().contacts;
       })
    }
}