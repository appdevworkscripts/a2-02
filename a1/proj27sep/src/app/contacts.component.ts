import {Component} from '@angular/core';
import {ContactService} from './contact.service';
@Component({
    templateUrl:'./contacts.component.html',
    providers:[ContactService]
})
export class ContactsComponent{
    contacts;
    displayedContacts;
    showAll=true;
    constructor(private contactService:ContactService){
      
    }
    ngOnInit(){
        this.contactService.getAllContacts().subscribe(x=>{
            this.contacts=x.json().contacts;
            this.filterContacts()
        })
    }
    filterContacts(){
        if(this.showAll){
            this.displayedContacts=this.contacts;
        }else{
            this.displayedContacts=this.contacts.filter(c=>{
                
                return c.phno && c.phno.startsWith("9");
            });
        }
    }
    recive(val){
        this.showAll=val;
        this.filterContacts();
    }
}